var router = require('express').Router();
var db = require('../dal/db');
var Tables = require('../dal/tables');
var Util = require('../helpers/Util');
var Models = require('../dal/models');

router.get('/', function (req, res) {
    console.log('hiiii');
    db
    .select(Tables.emp, ['id', 'name'])
    .then(function(recs){
        console.log(recs);
        return res.json(recs);
    })
    .catch(function(err){
        return res.json(err);
    });
});

router.post('/emp', function (req, res) {
    var obj = {
        id: 1006,
        name: "Henken Reg",
        age: 45,
        exp: 3,
        // salary: 51000.00,
        karma: 1
    };
    var values = Util.extractValuesUsingModel(Tables.emp, obj);
    var query = "insert into " + Tables.emp + " (" + Object.keys(Models[Tables.emp]).join(',') + ") values (" + values.join(',') + ")";
    console.log('POST /emp', query);
    db
    .query(query)
    .then(function(recs){
        return db.select(Tables.emp);
    })
    .then(function(recs) {
        return res.json(recs.filter(function(rec) {
            return rec.id === obj.id;
        }));
    })
    .catch(function(err){
        return res.json(err);
    });
});

module.exports = router;