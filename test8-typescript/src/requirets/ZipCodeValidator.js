"use strict";
var numberRegex = /^[0-9]+$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegex.test(s);
    };
    return ZipCodeValidator;
}());
module.exports = ZipCodeValidator;
