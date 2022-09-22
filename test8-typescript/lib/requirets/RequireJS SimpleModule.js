"use strict";

//AMD形式
define(['require', 'imports', './mod'], function (require, exports, mod_1) {
  exports.t = mod_1.something + 1;
}); //CommonJS

var mod_1 = require('./mod');

exports.t = mod_1.something + 1;