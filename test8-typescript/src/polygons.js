var Shapes;
(function (Shapes) {
    var Polygons;
    (function (Polygons) {
        var Triangle = /** @class */ (function () {
            function Triangle(s) {
                console.log(s);
            }
            return Triangle;
        }());
        Polygons.Triangle = Triangle;
        var Square = /** @class */ (function () {
            function Square(s) {
                console.log(s);
            }
            return Square;
        }());
        Polygons.Square = Square;
    })(Polygons = Shapes.Polygons || (Shapes.Polygons = {}));
})(Shapes || (Shapes = {}));
// namespace Validation {
//     export interface StringValidator {
//         isAcceptable(s:string):boolean;
//     }
//     const lettersRegex = /^[A-Za-z]+$/;
//     const numberRegex = /^[0-9]+$/;
//     export class LetterOnlyValidator implements StringValidator {
//                 isAcceptable(s:string){
//                     return s.length === 5 && lettersRegex.test(s)
//                 }
//     }
//     export class NumberOnlyValidator implements StringValidator {
//          isAcceptable(s:string){
//             return s.length === 5 && numberRegex.test(s)
//          }
//     }
// }
// let strings = ['hello','12345','20'];
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
// let validators:{[s:string]:Validation.StringValidator}  = {};
// validators['Letter only'] = new Validation.LetterOnlyValidator();
// validators['Number only'] = new Validation.NumberOnlyValidator();
// // for(let s of strings){
// //         for(let name in validators){
// //             console.log(`s:${s}---name:${name}--${validators[name].isAcceptable(s)?'match':'does not match'}`)
// //         }
// // }
// let obj1:{[s:number]:Validation.StringValidator} = {}
// obj1[1] = new Validation.LetterOnlyValidator()
// console.log(obj1)
//引用分离的文件
// let strings = ['hello','12345','20'];
// let validators:{[s:string]:Validation.StringValidator}  = {};
// validators['Letter only'] = new Validation.LettersOnlyValidator();
// validators['Number only'] = new Validation.NumbersOnlyValidator();
// for(let s of strings){
//         for(let name in validators){
//             console.log(`s:${s}---name:${name}--${validators[name].isAcceptable(s)?'match':'does not match'}`)
//         }
// }
var polygons = Shapes.Polygons;
var myTriangle = new polygons.Triangle('三角形'); //// Same as "new Shapes.Polygons.Square()"
var mySquare = new polygons.Square('正方形');
myTriangle;
mySquare;
