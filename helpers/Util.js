var dbUtil = require('../dal/dbUtil');
var Models = require('../dal/models');

module.exports = {
    extractValuesUsingModel: function(table, source) {
        var values = [];
        var model = Models[table];
        var fields = Object.keys(model);
        for(var i in fields) {
            var field = fields[i];
            var value = source[field];
            if(model[field] === String) {
                value = "'" + value + "'";
            }
            var defaultVal = dbUtil.getDbDefaultValue(model[field]);
            values.push(value || defaultVal);
        }
        return values;
    }
};