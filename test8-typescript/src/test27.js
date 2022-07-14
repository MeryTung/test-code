var Validation;
(function (Validation) {
    var lettersRegex = /^[A-Za-z]+$/;
    var numberRegex = /^[0-9]+$/;
    var LetterOnlyValidator = /** @class */ (function () {
        function LetterOnlyValidator() {
        }
        LetterOnlyValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && lettersRegex.test(s);
        };
        return LetterOnlyValidator;
    }());
    Validation.LetterOnlyValidator = LetterOnlyValidator;
    var NumberOnlyValidator = /** @class */ (function () {
        function NumberOnlyValidator() {
        }
        NumberOnlyValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegex.test(s);
        };
        return NumberOnlyValidator;
    }());
    Validation.NumberOnlyValidator = NumberOnlyValidator;
})(Validation || (Validation = {}));
var strings = ['hello', '12345', '20'];
//可以用这种方式写
// let myLetter = new Validation.LetterOnlyValidator();
// let myNumber = new Validation.NumberOnlyValidator();
// strings.forEach(value => {
//     console.log(`${value}--${myLetter.isAcceptable(value) ? "match":"does not match"}`)
// })
// strings.forEach(value => {
//     console.log(`${value}--${myNumber.isAcceptable(value) ? "match":"does not match"}`)
// })
//还可以这样写
var validators = {};
validators['Letter only'] = new Validation.LetterOnlyValidator();
validators['Number only'] = new Validation.NumberOnlyValidator();
// for(let s of strings){
//         for(let name in validators){
//             console.log(`s:${s}---name:${name}--${validators[name].isAcceptable(s)?'match':'does not match'}`)
//         }
// }
var obj1 = {};
obj1[1] = new Validation.LetterOnlyValidator();
console.log(obj1);
