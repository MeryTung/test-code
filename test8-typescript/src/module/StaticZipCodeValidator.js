"use strict";
exports.__esModule = true;
var numberRegex = /^[0-9]+&/;
function default_1(s) {
    return s.length === 5 && numberRegex.test(s);
}
exports["default"] = default_1;
