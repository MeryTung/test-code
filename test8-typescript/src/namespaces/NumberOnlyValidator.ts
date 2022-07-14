namespace Validation {
    const numberRegex = /^[0-9]+$/;
    export class NumbersOnlyValidator implements StringValidator {
        isAcceptable(s:string){
           return numberRegex.test(s)
        }
    }
}
