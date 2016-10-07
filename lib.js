const fs   = require('fs');
const GH   = require("github");
const path = require('path');

(function() {
    let mediaTypes = {};
    let clients    = {};

    let mediaHash = JSON.parse(fs.readFileSync(path.join(__dirname, "media_tree.json"), "utf8"));
    let createClient = (accept) => {
        return new GH({
            debug: false,
            protocol: 'https',
            host: 'api.github.com',
            followRedirects: false,
            timeout: 5000,
            headers: {
                'user-agent': 'RapidApi-App',
                'accept': accept,
            },
        });
    };

    for(let accept in mediaHash) {
        clients[accept] = createClient(accept);

        for(let i in mediaHash[accept]) {
            mediaTypes[mediaHash[accept][i]] = accept;
        }
    }

    clients['default'] = createClient('application/vnd.github+json');

    module.exports.client = clients;
    module.exports.accept = mediaTypes;
})();

module.exports.toCamelCase = (str, upper) => {
    str = str.toLowerCase().replace(/(?:(^.)|(\s+.)|(-.)|(_.))/g, 
    	(match) => match.charAt(match.length - 1).toUpperCase())
    if (upper)
        return str;
    return str.charAt(0).toLowerCase() + str.substr(1);
};

module.exports.toUnderscore = (str) => 
    str.replace(/\.?([A-Z])/g, 
        (x, y) => "_" + y.toLowerCase()
    ).replace(/^_/, "");

module.exports.clearArgs = (obj) => {
    for (let i in obj)
        if (obj[i] == undefined || obj[i] == '')
            delete obj[i];

    return obj;
}

module.exports.metadata     = () => fs.readFileSync('./git_metadata.json').toString();
module.exports.truemetadata = () => fs.readFileSync('./metadata.json').toString();