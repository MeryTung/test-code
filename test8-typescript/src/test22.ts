//变量声明

// function  f(){
//     var msg = 'hello world';
//     return msg
// }

// function foo(){
//     var a = 10;
//     return function g(){
//         var b = a + 1;
//         return b
//     }
// }
// console.log(foo()())


// function foo(){
//     var a= 10;
//     a = 2;
//     var b = g();
//     a = 3;
//     return b;
//     function g(){
//         return a
//     }
// }



// console.log(foo())

//for(var i = 1;i<10;i++){
  //  setTimeout(()=>console.log(i),100*i) //setTimeout的每一个函数表达式实际上都引用了相同作用域里的同一个i。
     //返回的结果是
    // 10
    // 10
    // 10
    // 10
    // 10
    // 10
    // 10
    // 10
    // 10
    
//}

//用立即执行的函数表达式（IIFE），获取每次迭代时i的值
// for(var i = 0; i<10;i++){
//     (function(i){
//         setTimeout(function(){console.log(i)},100*i)
//     })(i)
// }


//let
//块作用域
//块作用域变量在包含它们的块或for循环之外是不能访问的  //全局定义可以访问

//  function f(input:boolean){
//     let a = 10;
//     if(input){
//         let b = a + 1;  //a的作用域在f函数体内，能访问到a
//         return b
//     }
//    // return b   //找不到名称b
//  }


// {
//     let a = 10;
// } 
//  for(let i = 0 ; i< 2;i++){
//     //console.log(i + a)    //这里 找不到名称'a'
//  }

//typescript，在没有声明a 就调用不会报错
// function f(){
//     return a 
// }
// console.log(f());
// let a = 10

//重声明和屏蔽

// var a = 10;   //var不在乎你声明多少次，你只会得到一个
// var a = 20;
// if(true){
//   var a = 30
// }


//以下情况会报错
//let a = 10;
//let a = 20;  //无法重新声明块范围变量'a'

// function g(){
//     let x = 0;
//     var x = 0;  //并不是声明两个相同会计变量就会报错，这样声明一样会报错
// }


// function  f(condition,x){
//     if(condition){
//         let x = 10;
//         return x
//     }
//     return x
// }

// console.log(f(false,20))
// console.log(f(true,30))   //块级作用域变量声明在明显不同的块内声明，不会影响

//块级作用域变量的获取



// function  foo() {
//     let  getcity;
//     if(true){
//         let city = 'beijing';
//         getcity = () => city
//     }
//     return getcity()
// }

// console.log(foo())


//const foo ='hello';

// let input = [1,2];
// let [first,second] = input


//解构页可以用在已声明变量

// let a  = 1;
// let b = 2;
// let[first,second] = [a,b]
// console.log(first);
// console.log(second)

//可做函数参数

// function f([first,second]:[number,number]) {
//     console.log(first);
//     console.log(second);
// }


// f([1,2])

//...剩余变量
// let [first,...rest] = [1,2,3,4,5];
// console.log(first)
// console.log(rest)

//
// let [,first,second] = [1,2,3,4,5];
// console.log(first);
// console.log(second);

//解构元组
// let tuple:[number,string,boolean] = [1,'hello',true]  //元组可以像数组一样解构
// // let [a,b,c] = tuple;
// // let [a,...bc] = tuple;

// // console.log(bc)

// //忽略末尾元素或其他元素
// let [a] = tuple;
// let [,b,c] = tuple;
// console.log(a);console.log(b);console.log(c);

//解构对象

let o = {
     a:20,
     b:12,
     c:'bar'
}

// let {a,b} = o

// console.log(a,b)



//属性重命名

// let {a:newName1,b:newName2}:{a:number,b:number} /*****这里表示类型 */= o
// console.log(newName1);
// console.log(newName2)


// //指定默认值
// function keepWholeObject(wholeObject:{a:string,b?:number}) {
//     let {a,b = 1001} = wholeObject
//     return {a,b}
// }

// console.log(keepWholeObject({a:'hello'}))

//函数声明
//type C = {a:string,b?:number}
// function f({a,b}:C):any{
//     return {a,b}
// }

// console.log(f({a:'hello',b:1}))
//默认之前设置其格式{a:string,b?:number}
// function f({ a, b = 0 } = { a: "" }): void {
//     // ...
// }

// f({a:'hello'})
// f();
// f({})  //error

//展开正好与解构相反，可将一个数组展开为另一个数组
let first = [1,2];
let second = [4,5];
let bothPost = [0,...first,...second,8]
console.log(bothPost)

//对象展开只争对可枚举类型
class C {
    public a  =13;
    m(){
        console.log('hello')
    }
}

let myClass = new C()
let clone = {...myClass};
console.log(clone.a)
console.log(clone.m())  //不存在属性m
