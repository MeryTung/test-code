//类定义
// class Greeter {
//     greeting: string;
//     constructor(message: string){
//         this.greeting = message;
//     }
//     greet(){
//         return 'Hello ' + this.greeting;
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let greete = new Greeter("typescript");
// console.log(greete.greet())
//类继承
// class Animal {
//     movo(distanceInMeters: number = 0){
//         return `Animal moved  ${distanceInMeters}`
//     }
// }
// class Dog extends Animal {
//     bark() {
//         return 'Worf!Worf!'
//     }
// }
// let ani = new Animal();
// ani.movo(20);
// let dogg = new Dog();
// console.log(dogg.movo(30))
// console.log(dogg.bark())
// class Father {
//     private name: string;
//     constructor(theName: string){
//         this.name = theName
//     }
//     move(distanceInMeters: number = 0){
//         return `halo,number is ${distanceInMeters}`
//     }
// }
// class SonOne extends Father {
//     constructor(name:string){
//         super(name)
//     }
//     move(distanceInMeters = 5){
//         return 'Son-one'
//         super.move(distanceInMeters)
//     }
// }
// class SonTwo extends Father {
//     private name: string;
//     constructor(name: string){
//         super(name)
//     }
//     move(distanceInMeters = 60){
//         return 'Son-two'
//         super.move(distanceInMeters)
//     }
// }
// let father = new Father('father')
// let one = new SonOne('hello')
// let two = new SonTwo('halo')
// console.log(father = one)  //
//不能将类型”SonTwo“分配给类型”Father“.类型具有私有属性”namde“的单独声明
//其中一个类包含了私有属性，只有当另一个继承这个类的私有属性，并且都是来至同一声明，我们才认为是这两个类兼容。
//console.log(father = two) 
//console.log(one.name)  //私有成员只能在Father类内部使用，不能在实例化外部使用。
// console.log(one)
// console.log(one.move())
// console.log(two)
// console.log(two.move())
//TypeScript中，类成员默认是public
//protect被保护的，与private相同，有一点不同的是，protect可以在派生类中访问
// class  Father {
//     protected name: string;
//     protected constructor(name: string){
//         this.name = name
//     }    
// }
// class SonOne extends Father {
//     private department: string;
//     constructor(name: string,department: string){
//         super(name);
//         this.department = department
//     }
//     public getUserName(){
//         return `halo,my name is ${this.name} and I work the ${this.department}.`
//     }
// }
// let son = new SonOne('Mark','Ali');
// //let father = new Father('被保护了')  //类”Father“的构造函数时受保护的，仅可在类声明中访问。
// console.log(son.getUserName());
//console.log(son.name)  //属性”name“受保护，只能在类”Father及其子类中访问
//构造函数被标记被保护的，就不能进行实例化，但是能被继承。
//ReadOnly标识符
//只读属性必须在声明时或构造函数内初始化
// class Father {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor(theName: string){
//         this.name = theName
//     }
// }
// let father = new Father('hello typecsript')
// father.name = 'OMG' //无法分配到”name“，因为它=是只读属性
// console.log(father)
var Father = /** @class */ (function () {
    function Father(name) {
        this.name = name;
    }
    Father.prototype.move = function (distanceInMeters) {
        return "".concat(this.name, " moved ").concat(distanceInMeters);
    };
    return Father;
}());
var SonOne = /** @class */ (function (_super) {
    __extends(SonOne, _super);
    function SonOne(name) {
        return _super.call(this, name) || this;
    }
    SonOne.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 20; }
        return "SonOne -- ".concat(distanceInMeters, " ");
    };
    return SonOne;
}(Father));
var father = new Father('Mark');
var son = new SonOne('son');
console.log(son.move());
console.log(father.move(30));
