const fs = require('fs');

module.exports.toCamelCase = (str, upper) => {
    str = str.toLowerCase().replace(/(?:(^.)|(\s+.)|(-.)|(_.))/g, function(match) {
        return match.charAt(match.length - 1).toUpperCase();
    });
    if (upper)
        return str;
    return str.charAt(0).toLowerCase() + str.substr(1);
};

module.exports.toUnderscore = (str) => 
    str.replace(/\.?([A-Z])/g, 
        (x, y) => "_" + y.toLowerCase()
    ).replace(/^_/, "");

module.exports.metadata     = () => fs.readFileSync('./git_metadata.json').toString();
module.exports.truemetadata = () => fs.readFileSync('./metadata.json').toString();
