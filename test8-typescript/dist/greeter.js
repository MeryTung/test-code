var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello' + person.firstName + person.lastName;
}
var user = new Student('John', 'User');
// let user = {firstName: 'John', lastName: 'User'}
var box = document.getElementById('box');
document.body.innerHTML = greeter(user);
