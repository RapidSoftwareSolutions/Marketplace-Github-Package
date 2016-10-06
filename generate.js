#!/usr/bin/env node
"use strict";

const fs   = require("fs");
const path = require("path");
const lib  = require('./lib')

let main = module.exports = function() {
    let routespath    = path.join(__dirname, "routes.json")
        ,hashpath     = path.join(__dirname, "hash.json")
        ,routes       = JSON.parse(fs.readFileSync(routespath, "utf8"))
        ,hash         = JSON.parse(fs.readFileSync(hashpath,   "utf8"))
        ,defines      = routes.defines
        ,sections     = {}
        ,gitMetadata  = {}
        ,apiTest      = []
        ,count        = 0;

    let test = `
"use strict";

const app     = require('./index');
const assert  = require('chai').assert;
const request = require('supertest-as-promised');
const token   = '';

describe("Github API package", () => {
    <%blocks%>
});
`;
    let testBlock = `
    it("/<%name%>", () => {
        return request(app)
        .post("/api/Github/<%method%>")
        .send({args:{
            accessToken: token, <%args%>
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });
`;

    delete routes.defines;

    gitMetadata.package     = 'Github';
    gitMetadata.tagline     = 'Github Package';
    gitMetadata.image       = '';
    gitMetadata.description = '';
    gitMetadata.repo        = '';
    gitMetadata.blocks      = [];
    gitMetadata.accounts    = {
        domain:       'github.com',
        credentials: ['accessToken']
    }

    let abc = 0;
    function prepareApi(struct, baseType) {
        if (!baseType)
            baseType = "";

        Object.keys(struct).sort().forEach(function(routePart) {
            let block    = struct[routePart],
                funcName = '';
                count ++;

            if (!block)
                return;

            let messageType = baseType + "/" + routePart;

            if (block.params) {
                let { args
                    , testargs } = getParams(block.params);

                let parts    = messageType.split("/");
                let section  = lib.toCamelCase(parts[1]);
                let key      = (section[section.length - 1] == 's') ? section.slice(0, -1) : section;
                let usedUrls = [];

                if (!sections[section]) {
                    sections[section] = [];
                }

                parts.splice(0, 2);

                let githubName = lib.toCamelCase(parts.join("-"));
                let part       = key[0].toUpperCase() + key.slice(1);

                if(key in block.params || `$${key}` in block.params) {
                    if(parts.length <= 2) 
                        parts[parts.length] = part;
                    else 
                        parts.splice(1, 0, part);
                } else parts.push(part);

                funcName = lib.toCamelCase(parts.join("-"));
                
                if(hash[funcName]) 
                    funcName = hash[funcName];
                else funcName = 'pingRepositoryHook';

                console.log(funcName)

                gitMetadata.blocks.push({
                    github: {
                        section: section,
                        name:    githubName
                    },
                    url:       block.url,
                    method:    block.method,
                    name:      funcName, 
                    args:      args,
                    callbacks: [{name: 'error', info: 'Error'}, {name: 'success', info: 'Success'}]
                });

                apiTest.push(testBlock
                    .replace('<%args%>',   testargs)
                    .replace('<%name%>',   funcName)
                    .replace('<%method%>', funcName)
                );
            }
            else {
                // recurse into this block next:
                prepareApi(block, messageType);
            }
        });
    }

    function getParams(paramsStruct) {
        let params   = Object.keys(paramsStruct),
            args     = [],
            testargs = '',
            paramName, def;

        if (!params.length)
            return [];

        for (let i = 0, l = params.length; i < l; ++i) {
            paramName = params[i];

            if (paramName.charAt(0) == "$") {
                paramName = paramName.substr(1);
                if (!defines.params[paramName]) {
                    console.log('Invalid param ', paramName)
                    process.exit(1);
                }
                else
                    def = defines.params[paramName];
            }
            else
                def = paramsStruct[paramName];

            args.push({
                name: "accessToken",
                type: "credentials",
                info: "The access_token obtained from Github. (optional)"
            });

            args.push({
                name: lib.toCamelCase(paramName),
                type: def.type,
                info: (def.required) ? def.description + " (required)" : def.description + " (optional)",
                req:  def.required
            });

            testargs += `${paramName}: "${def.type}", `;
        }

        return { args, testargs };
    }

    prepareApi(routes);

    fs.writeFile("./test.js", test.replace('<%blocks%>', apiTest.join('')), function(err) {
        if(err) return console.log(err);
    }); 

    fs.writeFile("./git_metadata.json", JSON.stringify(gitMetadata), function(err) {
        if(err) return console.log(err);

        console.log("OK! ", count);
    });
};

main();