let numberRegex = /^[0-9]+$/;

class ZipCodeValidator {
    isAcceptable(s:string){
        return s.length === 5 && numberRegex.test(s)
    }
}

export = ZipCodeValidator
