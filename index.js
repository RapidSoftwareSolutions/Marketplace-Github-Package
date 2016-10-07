"use strict";

global.PACKAGE_NAME = "Github";

const express       = require('express'),
    bodyParser      = require('body-parser'),
    fs              = require('fs'),
    lib             = require('./lib'),
    GitHubApi       = require("github");

const PORT          = process.env.PORT || 8080;
const app           = express();
const optionsHash   = {
    'organization_name': 'org',
    'repository_name':   'repo'
};

let metadata   = lib.metadata(),
    trueMeta   = lib.truemetadata(),
    metaObject = JSON.parse(metadata);

let client = new GitHubApi({
    debug:            false,
    protocol:        'https',
    host:            'api.github.com',
    headers:         { 'user-agent': 'RapidApi-App' },
    followRedirects: false,
    timeout:         5000
});

app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.all(`/api/${PACKAGE_NAME}`, (req, res) => { res.send(JSON.parse(trueMeta)); });

for (let {name, args, github} of metaObject.blocks) {
    let gitSection = github.section,
        gitName    = github.name,
        reqArgs    = [];

    for(let arg in args) if(arg.req) reqArgs.push(arg);

    app.post(`/api/${PACKAGE_NAME}/${name}`, (req, res) => {
        let options  = {};
        let response = {
            callback     : "",
            contextWrites: {}
        };

        if(req.body.args.accessToken) {
            client.authenticate({
                type: 'oauth',
                token: req.body.args.accessToken
            });
        }

        res.status(200);

        for(let key in req.body.args) {
            let optkey = lib.toUnderscore(key);

            if(req.body.args[key] !== '') {
                options[optionsHash[optkey] || optkey] = req.body.args[key];
            }

            console.log('call')

            if(!!~reqArgs.indexOf(key) && (key == '' || !key)) {
                response.contextWrites[to] = 'Error: Fill in required fields to use the GitHub Api.';
                   response.callback = 'error';

                res.send(response);
                return;
            }
        }

        let to = options['to'] || 'to';

        if(typeof client[gitSection][gitName] === "function") {
            client[gitSection][gitName](options, (err, result) => {
                if(!err) {
                    response.contextWrites[to] = JSON.stringify(result);
                    response.callback = 'success'; 
                } else {
                    response.contextWrites[to] = JSON.stringify(err || result);
                    response.callback = 'error';
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
