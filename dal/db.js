var pgp = require('pg-promise')();
var connection = require('./dbconf').connectionString;
var db = pgp(connection);

var dbService = {
    select: function(table, fields) {
        var columns = fields;
        if(Array.isArray(fields)) {
            columns = fields.join(',');
        }
        return db.query('select ' + (columns || '*') + ' from ' + table);
    },

    query: db.query
};

module.exports = dbService;