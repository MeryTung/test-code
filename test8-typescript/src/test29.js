//类型推断
// let x= 'a';
// let y= 123;
// let z;
// function add(a:number,b:10){
//     return a + b
// }
// const obj2 = {
//     a: 10,
//     b: 'hello'
// }
// interface Named {
//     name: string
// }
// class Person {
//      name: string;
//      num: number
// }
// let p: Named;
// p = new Person();
// let x:Named
// let y = {name: 'Mark', age:30};
// console.log(x= y)
// function greet(n:Named){
//     return 'hello' + n.name
// }
// console.log(greet( y))
// interface x {
//     a:any;
//     b:any
// }
// interface y {
//     a:any;
//     b:any;
//     c:any
// }
// let xtest:x = {a:1,b:2};
// let ytest:y = {a:4,b:5,c:9}
// xtest = ytest  //接口类型 ，成员少的兼容成员多的
//函数兼容
// let x = (a:number) => 1;
// let y =(a:number,b:string) => 1;
// y = x
//x = y    // 这里x为源函数，y为目标函数。源函数返回类型必须是目标函数返回类型子集
//error，不能将类型（a：number,b:string）=>number 分配给类型（a：number）=> number
//函数中参数个数固定
// type Handlers= (a:number,b:number) => void;
// function foo(handler:Handlers){
//     return handler
// }
// let handler1 = (a:1)=> a;
// let handler2 = (a:1,b:2,c:3)=> a + b + c
// foo(handler1)
// foo(handler2)  //类型(a:1,b:2,c:3)=>number的参数不能赋给类型Handlers的参数
//函数参数个数不固定
var a = function (x, y) { };
var b = function (x, y) { };
var c = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
};
a = b;
a = c;
b = a;
b = c;
c = a;
c = b;
