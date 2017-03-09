var router = require('express').Router();

router
    .get('/', function (req, res) {
        return res.send('Get Stevenson');
    })
    .post('/', function (req, res) {
        return res.send('Post Steven');
    })
    .delete('/delete', function (req, res) {
        return res.send('Delete Steven');
    });

module.exports = router;