var l = function () {
    console.log.apply(this, arguments);
};
var d = function () {
    console.dir.apply(this, arguments);
};

module.exports = {
    l: l,
    d: d
};