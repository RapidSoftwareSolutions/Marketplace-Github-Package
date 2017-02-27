"use strict";

global.PACKAGE_NAME = "Github";

const express       = require('express'),
    bodyParser      = require('body-parser'),
    fs              = require('fs'),
    lib             = require('./lib');

const PORT          = process.env.PORT || 8080;
const app           = express();
const optionsHash   = {
    'organization_name': 'org',
    'repository_name':   'repo',
    'token':             'access_token'
};

let trueMeta   = JSON.parse(lib.truemetadata()),
    metaObject = JSON.parse(lib.metadata());

app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.all(`/api/${PACKAGE_NAME}`, (req, res) => { res.send(trueMeta); });


app.post(`/api/${PACKAGE_NAME}/webhooks`, (req, res) => {
    const { body, params, headers } = req.body.args;
    const github_signature = headers["x-hub-signature"];
    const rapid_signature  = headers["rapid-signature"];
    const response = {
        callback: '',
        contextWrites: {
            to: {
                client_msg: {},
                http_resp: '',
                socket_token: ''
            }
        }
    };

    const found = params.find(param => param.repository_name === body.repository.name);
    if (!found || github_signature !== rapid_signature) {
        response.callback = 'error';
        response.contextWrites.to.client_msg = 'Mismatching signatures';
    } else {
        response.callback = 'success';
        response.contextWrites.to.client_msg = body;
        response.contextWrites.to.socket_token = found._rapid_sock_token;
    }

    res.status(200).send(response);
});

for (let {name, args, url, github} of metaObject.blocks) {
    let gitSection = github.section,
        gitName    = github.name,
        reqArgs    = [];

    for(let arg in args) if(arg.req) reqArgs.push(arg);
    
    app.post(`/api/${PACKAGE_NAME}/${name}`, (req, res) => {
        let client   = lib.createClient(lib.accept[url] || 'application/vnd.github+json');
        let auth     = {};
        let options  = {};
        let fillin   = [];
        let response = {
            callback     : "",
            contextWrites: {}
        };

        req.body.args = lib.clearArgs(req.body.args);

        if(req.body.args.accessToken) {
            auth.type  = 'oauth';
            auth.token = req.body.args.accessToken;
        }

        if(req.body.args.clientSecret) {
            auth.type  = 'oauth'
            auth.key    = req.body.args.clientId;
            auth.secret = req.body.args.clientSecret;
        }

        if(req.body.args.username || req.body.args.password) {
            auth.type     = 'basic';
            auth.username = req.body.args.username;
            auth.password = req.body.args.password;

            delete auth.key;
            delete auth.secret;
        }

        if(req.body.args.twoFactorCode) {
            options.headers = {
                "X-GitHub-OTP": req.body.args.twoFactorCode
            }

            delete req.body.args.twoFactorCode;
        }

        if(Object.keys(auth).length > 0) {
            client.authenticate(lib.methodAuth(name, req.body.args) || auth);
        }

        res.status(200);

        for(let key in req.body.args) {
            let optkey = lib.toUnderscore(key);

            if(req.body.args[key] !== '') {
                options[optionsHash[optkey] || optkey] = req.body.args[key];
            }

            if(!!~reqArgs.indexOf(key) && !key) fillin.push(key);
        }

        if(fillin.length) {
            response.callback = 'error';
            response.contextWrites[to] = {
                status_code: 'REQUIRED_FIELDS',
                status_msg: 'Please, check and fill in required fields.',
                fields: fillin
            };

            res.send(response);
            return;
        }

        let to = options['to'] || 'to';

        if(gitName == 'createFile')
            options['content'] = new Buffer(options['content'] || ' ').toString('base64');

        if(name == 'createSingleFileGist') {
            options.files = {}
            options.files[req.body.args['fileName']] = {
                content: req.body.args['fileContents']
            }
        }

        if(typeof client[gitSection][gitName] === "function") {
            client[gitSection][gitName](options, (err, result) => {
                if(!err) {
                    response.callback = 'success';
                    response.contextWrites[to] = result;
                } else {
                    response.callback = 'error';
                    response.contextWrites[to] = {
                        status_code: 'API_ERROR',
                        status_msg: JSON.stringify(err || result)
                    }
                }

                res.send(response);
                return;
            });
        } else {
            response.contextWrites[to] = '404';
            response.callback = 'error';

            res.send(response);
        }
    });
}

app.listen(PORT);
module.exports = app;
