//装饰器 Decorators
import "reflect-metadata";

//装饰器工厂

// function color(){
//     console.log('color();evaluated')
//     return function(target,propertyKey:string,descriptor:PropertyDescriptor){
//         console.log('f(); called')
//     }
// }

// function g(){
//     console.log('g();evaluated')
//     return function(target,propertyKey:string,descriptor:PropertyDescriptor) {
//         console.log('g(); called')
//     }
// }

// class C {
//     @color()
//     @g()
//     method(){

//     }
// }

// @testable(true)
// class MyTestableClass {

// }

// @testable
// class MyTestableClass{}
// function testable(target){   //target 表示要装饰的目标,这里是MyTestableClass类
//     target.isTestable = true;
// }


// function testable(isTestable){   //如果一个参数不够,可以在外层再封装一个函数
//     return function(target){
//             target.isTestable = isTestable;   //添加实例属性
//     }
// }

// function testable(target){
//     target.prototype.isTestable = true
// }

// let myTest = new MyTestableClass();
// console.log(myTest.isTestable)

// color();
// g();
// g();
// color()

//装饰器

//封装构造函数和原型
// @sealed
// class Greeter {
//     greeting: string;
//     constructor(message: string){
//         this.greeting = message;
//     }
//     greet() {
//         return 'Hello' +' ' + this.greeting;
//     }
// }

// function sealed(constructor:Function){
//     Object.seal(constructor);
//     Object.seal(constructor.prototype)
// }

// let greete = new Greeter('world');
// console.log(greete.greet())


//重载构造函数
// function  classDecorator<T extends {new(...args:any[]):{}}>(constructor:T){
//      return class extends  constructor {
//          newProperty = 'new Property';
//          hello = 'override';
//      }
// }


// @classDecorator
// class Greeter {
//         property = 'property';
//         hello:string;
//         constructor(m: string){
//             this.hello = m
//         }
// }


// let greet = new Greeter('world')
// console.log(greet)


// //方法装饰
// function enumerable(value:boolean){
//     //target:表示类的对象原型，propertyKey:所要装饰的属性名，descriptor:该属性的描述对象
//     return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
//            descriptor.enumerable = value  //修改属性enumerable描述对象，使的该属性不可遍历
//     }
// }

//装饰器不能用于函数，因为函数存在提升
// var counter = 0;
// var add = function() {
//     counter++
// }

// @add function foo(){   //error，修饰器在此处无效
    
// } 


//访问装饰器 get set
// class Point1 {
//     private _x: number;
//     private _y: number;
//     constructor(x: number, y: number) {
//         this._x = x;
//         this._y = y;
//     }

//     @configurable(true)
//     get x() { return this._x; }

//     @configurable(true)
//     get y() { return this._y; }
// }





// class Foo {
//     private _x: number;
//     private _y:number;
//     constructor(x: number, y: number){
//         this._x = x;
//         this._y = y
//     }
//     @configurable(true)
//     get x(){return this._x; }
    
//     @configurable(true)
//     get y(){return this._y;}
    
// }


// function configurable(value: boolean) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         descriptor.configurable = value;
//     };
// }

// let points = new Point1(1,1);
// let foo2 = new Foo(1,2)

//属性装饰器
// class Employee {
//     @readOnly(false)
//     salary(){
//         console.log('这是个不可重写的属性')
//     }

// }

// function readOnly(value:boolean){
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
//                 descriptor.writable = value;
//     }

// }

// const em = new Employee()
// em.salary = () => {
//     console.log('重写会报错')   // Cannot assign to read only property 'salary' of object '#<Employee>'
// }

// em.salary()


//参数装饰器

// function log(params:string){
//     console.log(params)
//     return function(target:any,propertyKey: string,index:number){
//        console.log(index) 
//     }

// }

//     class Employee {
//         salary(@log('IT') department:string,@log('John') name: string){
//             console.log('参数装饰器')
//         }
//     }

//     const em = new Employee();
//     em.salary('hello','world')

//添加元数据

// class Greeter {
//     @format("Hello, %s")
//     greeting: string;
//     constructor(message: string) {
//       this.greeting = message;
//     }
//     greet() {
//       let formatString = getFormat(this, "greeting");
//       return formatString.replace("%s", this.greeting);
//     }
//   }



//   import "reflect-metadata";
//   const formatMetadataKey = Symbol("format");
//   function format(formatString: string) {
//     return Reflect.metadata(formatMetadataKey, formatString);
//   }
//   function getFormat(target: any, propertyKey: string) {
//     return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
//   }


import 'reflect-metadata'

// @Reflect.metadata('token','aWHancYD')
class Employee {
    @Reflect.metadata('level1','D2')
    salary(){
        console.log('这是个函数')
    }
    bar(){
        console.log('Mark')
    }
    @Reflect.metadata('level2','daily')
    static employee(){
        console.log('这是个静态函数')
    }
    
}

// let token = Reflect.getMetadata('token',Employee);
// //实例方法与静态方法取元数据是不同的，实例方法需要在类的实例上取元数据，静态方法直接在类上取元数据。
// let level1 = Reflect.getMetadata('level1',new Employee(),'salary')  
// let level2 = Reflect.getMetadata('level2',Employee,'employee')  
// console.log(token)
// console.log(level1)
// console.log(level2)

Reflect.defineMetadata('token','aWhancYD',Employee);
Reflect.defineMetadata('level3', 'hello', Employee, 'bar')
console.log(Reflect.getMetadata('token',Employee)) //  aWhancYD

 console.log(Reflect.hasMetadata('token',Employee)) // true
 console.log(Reflect.hasMetadata('level3',Employee,'bar')) // true
 console.log(Reflect.hasMetadata('level1',new Employee(),'salary')) // true
 console.log(Reflect.getMetadataKeys(new Employee(),'salary'))  // [ 'design:returntype', 'design:paramtypes', 'design:type', 'level1' ]
 console.log(Reflect.getMetadataKeys(Employee,'bar'))  // [ 'level3' ]
 console.log(Reflect.getMetadataKeys(Employee)) // [ 'token' ]



