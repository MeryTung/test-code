"use strict";

var Validation;

(function (Validation) {
  var lettersRegexp = /^[A-Za-z]+$/;

  var LettersOnlyValidator =
  /** @class */
  function () {
    function LettersOnlyValidator() {}

    LettersOnlyValidator.prototype.isAcceptable = function (s) {
      return lettersRegexp.test(s);
    };

    return LettersOnlyValidator;
  }();

  Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));

var Validation;

(function (Validation) {
  var numberRegex = /^[0-9]+$/;

  var NumbersOnlyValidator =
  /** @class */
  function () {
    function NumbersOnlyValidator() {}

    NumbersOnlyValidator.prototype.isAcceptable = function (s) {
      return numberRegex.test(s);
    };

    return NumbersOnlyValidator;
  }();

  Validation.NumbersOnlyValidator = NumbersOnlyValidator;
})(Validation || (Validation = {}));

var strings = ['hello', '12345', '20'];
var validators = {};
validators['Letter only'] = new Validation.LettersOnlyValidator();
validators['Number only'] = new Validation.NumbersOnlyValidator();

for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
  var s = strings_1[_i];

  for (var name_1 in validators) {
    console.log("s:".concat(s, "---name:").concat(name_1, "--").concat(validators[name_1].isAcceptable(s) ? 'match' : 'does not match'));
  }
}