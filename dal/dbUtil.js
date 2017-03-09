module.exports = {
    // Setting  default data type to tabel fields
    getDbDefaultValue: function (dataType) {
        var value = null;
        switch (dataType) {
            case Number:
                value = 0;
                break;
            case String:
            default:
                value = 'NULL';
        }
        return value;
    }
}