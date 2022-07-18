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

//函数中参数个数固定,目标函数类型要兼容源类型
// type Handlers= (a:number,b:number) => void;
// function foo(handler:Handlers){
//     return handler
// }

// let handler1 = (a:1)=> a;
// let handler2 = (a:1,b:2,c:3)=> a + b + c
// foo(handler1)
// foo(handler2)  //类型(a:1,b:2,c:3)=>number的参数不能赋给类型Handlers的参数

//函数参数个数不固定

// let a = (x:number, y:number) => {}
// let b = (x?:number,y?:number) => {}
// let c = (...args:number[]) => {}
// a = b;
// a = c;
// b = a;  
// b = c;
// c = a;
// c = b;


//基本类型
// type Handlers = (a:number, b:number) => void
// function foo(handlers:Handlers){
//     return handlers
// }

// let handler1 = (n:string) => void
// foo(handler1)

//对象类型
// interface Point3D {
//     x: number, y:number,z:number
// }
// interface Point2D {
//     x:number, y:number
// }

// let point3d1 = (p3d:Point3D) => {}
// let point2d1 = (p2d:Point2D) => {}

// point3d1 = point2d1  //函数兼容，多的兼容少的，但接口类型兼容，是少的兼容多的
// point2d1 = point3d1


// let f = () => ({x:1})
// let g = () => ({x:1,y:2});
// f = g;   //f函数返回值是g函数返回值子类型，而且这里是成员少的兼容成员多的（与鸭式变型法一致）
// g = f;    //不能将ff返回值分配给g返回值，因为缺少y属性


//函数重载，目标函数的参数个数多余源函数的参数个数

// function overloadtest(a:number, b:number,c:number):number
// function overloadtest(a:string,b:string,c:string): string;


// function overloadtest(a:any,b:any,c:any,d:any):{}  

//枚举类型和数字类型兼容
// enum Fruit {
//     Apple,
//     Banana
// }

// enum Color {
//     Red,
//     Green
// }

// let color1:Color = 1;
// let numtest:number = Fruit.Apple;

// //枚举类型相互间不能兼容
// let color2:Color = Fruit.Apple

//类的兼容性
class A {
    static s = 1;
    constructor(p:number,q:number){};
    id:number;
    private name:string = ''
}

class B {
    id:number;
    constructor(x:string){};
    private name:string =''
}

class Ctest extends A {}





let aa = new A(1,2);
let bb = new B('hello');
let cc = new Ctest(2,3)
aa = cc;
cc = aa;
//aa = bb   
/***不能将类型“B”分配给类型“A”。
类型具有私有属性“name”的单独声明***/
//bb = aa;  


//泛型
interface  Empty<T> {
     value: T
}

let object1:Empty<number> =  {value: 1}
let object2:Empty<string> = {value: 'hello'}
object1 = object2

let log1 =<T>(x:T):T => x;

let log2 =<U>(x:U):U => x;

log1 =log2 
log2 = log1

// let a = 1;  //number
// let b =[];  //any[]
// let c = [1]  //number[]
// let d = ['d']  //string[]


let a1 = (x=1)=> x  //(x?:number) =>number
let b1 = (x=1) => {return x+1}


//let a2:(x?:number) =>number
let a2 = (x =1) => {
    const res = x + 2;
    return res   //res:number
}

let b2 = [1,null];

window.onkeydown = (event:KeyboardEvent) => {
    console.log(event.AT_TARGET)
}

window.onkeydown = (event:KeyboardEvent) => { console.log('onkeydown')}

// let foo = {} 
// foo.bar = 123

interface Foo {
     bar: number
}

let foo:Foo ={
    bar:123
};
