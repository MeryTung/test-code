let strings = ['hello','12345','20'];
let validators:{[s:string]:Validation.StringValidator}  = {};
validators['Letter only'] = new Validation.LettersOnlyValidator();
validators['Number only'] = new Validation.NumbersOnlyValidator();
for(let s of strings){
        for(let name in validators){
            console.log(`s:${s}---name:${name}--${validators[name].isAcceptable(s)?'match':'does not match'}`)
        }
}

