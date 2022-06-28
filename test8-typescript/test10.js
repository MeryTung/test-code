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
var Father = /** @class */ (function () {
    function Father(name) {
        this.name = name;
    }
    return Father;
}());
var SonOne = /** @class */ (function (_super) {
    __extends(SonOne, _super);
    function SonOne(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    SonOne.prototype.getUserName = function () {
        return "halo,my name is ".concat(this.name, " and I work the ").concat(this.department, ".");
    };
    return SonOne;
}(Father));
var son = new SonOne('tanglu', 'Ali');
console.log(son.getUserName());
