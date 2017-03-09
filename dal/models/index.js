/*
 * https://www.npmjs.com/package/wrench
 */
var wrench = require('wrench');

var path = require('path');

var models = {};

// Dynamically requiring every file in current folder.
var files = wrench.readdirSyncRecursive(__dirname);

for(var x in files) {
    var file = files[x];
    // Preventing index.js file
    if(path.basename(__filename) !== file) {
        var key = path.basename(file, '.js');
        models[key] = require(path.join(__dirname, file));
    }
}
// Exporting all database schemas
module.exports = models;