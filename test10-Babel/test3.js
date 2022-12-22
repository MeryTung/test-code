var objectFactory = function(){
    var obj = new Object();
    Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype
    var rest = Constructor.apply(obj,arguments);
    return typeof rest == "object" ? rest : obj

}

function Person(name) {
    this.name = name
}

Person.prototype.getName = function() {
    return this.name
}

var myClass = function(name){
    this.name = name;
    return {
        name: 'hello'
    }
}

Function.prototype.call(this,1,2)
Function.prototype.apply(this,[1,2])
Function.prototype.bind(this,[1,2,3])()

var obj1 = {
    name:'jack',
    getName:function(){
        return this.name
    }
}
var obj2 = {
    name:'rose'
}

var getName2 = {
    name: 'yuanyuan'
}

console.log(obj1.getName.call(getName2))

console.log(obj1.getName.call(obj2))
console.log(obj1.getName.apply(obj2))

// var my1 = new myClass('jack');
// console.log(my1.name)

var a = objectFactory(Person,'sven');
console.log(a.name);
console.log(a.getName())
console.log(Object.getPrototypeOf(a) === Person.prototype)