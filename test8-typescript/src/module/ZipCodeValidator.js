"use strict";
// import  { StringValidator } from './StringValidator'
// export const numberRegex = /^[0-9]+$/;
// class ZipCodeValidator implements StringValidator {
//       isAcceptable(s:string){
//         return s.length ===5 && numberRegex.test(s)
//       }
// }
exports.__esModule = true;
// let zipcode = new ZipCodeValidator();
// console.log(zipcode.isAcceptable('12345'));
// export { ZipCodeValidator }
// export { ZipCodeValidator  as mainValidator } 
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && ZipCodeValidator.numberRegex.test(s);
    };
    ZipCodeValidator.numberRegex = /^[0-9]+$/;
    return ZipCodeValidator;
}());
exports["default"] = ZipCodeValidator;
