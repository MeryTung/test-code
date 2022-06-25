
// let user = [1,2,3] 
interface Person {
    lastName: string,
    firstName: string
}


class Student {
    fullName: string;
    constructor(public firstName: string, public lastName: string){
        this.fullName = firstName + ' ' + lastName
    }
}
function greeter(person: Person){
    return 'Hello' + person.firstName + person.lastName
}


let user = new Student('John','User');

// let user = {firstName: 'John', lastName: 'User'}
const box = document.getElementById('box');
document.body.innerHTML = greeter(user)