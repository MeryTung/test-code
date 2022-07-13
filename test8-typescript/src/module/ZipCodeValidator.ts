// import  { StringValidator } from './StringValidator'
// export const numberRegex = /^[0-9]+$/;
// class ZipCodeValidator implements StringValidator {
//       isAcceptable(s:string){
//         return s.length ===5 && numberRegex.test(s)
//       }
// }


// let zipcode = new ZipCodeValidator();
// console.log(zipcode.isAcceptable('12345'));

// export { ZipCodeValidator }
// export { ZipCodeValidator  as mainValidator } 

export default class ZipCodeValidator {
     static numberRegex = /^[0-9]+$/;
     isAcceptable(s:string){
         return s.length === 5 && ZipCodeValidator.numberRegex.test(s)
     }
}