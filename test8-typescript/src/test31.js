@testable
class MyTestableClass{
    
}

function testable(target){
        target.istrueAlias = true;
        target.prototype.isFalseAlias = false;
}

let baz = new MyTestableClass();
console.log(baz.isFalseAlias)
console.log(MyTestableClass.istrueAlias)

class Person {
        constructor(f,s){
                this.first = f;
                this.last = s;
        }
        @readonly
        name() { return `${this.first} ${this.last}` }
      }

function readonly(target, name, descriptor){
// descriptor对象原来的值如下
// {
//   value: specifiedFunction,
//   enumerable: false,
//   configurable: true,
//   writable: true
// };
descriptor.writable = false;
return descriptor;
}

//readonly(Person.prototype, 'name', descriptor);
//target：类的原型对象
//name所要装饰的属性名
//descriptor该属性描述对象


// 类似于
//Object.defineProperty(Person.prototype, 'name', descriptor);

const myperson = new Person('1','2');
console.log(myperson.name());