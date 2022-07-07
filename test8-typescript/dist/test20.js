"use strict";
//装饰器 Decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
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
//添加元数据
require("reflect-metadata");
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        var formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    };
    __decorate([
        format("Hello, %s"),
        __metadata("design:type", String)
    ], Greeter.prototype, "greeting", void 0);
    return Greeter;
}());
var formatMetadataKey = Symbol("format");
function format(formatString) {
    return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target, propertyKey) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
