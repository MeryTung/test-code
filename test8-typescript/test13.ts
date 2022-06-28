//泛型
//  function identify<T>(arg: Array<T>):Array<T> {
//     console.log(arg.length)
//     return arg
//  }
     
//  console.log(identify([1,2,3]))

//或者
// function identify<T>(arg: T[]):T[] {
//     return arg
// }
// console.log(identify([1,2,3]))

//泛型函数类型
//非泛型函数类型,类似于函数声明一样
function identify<T>(arg: T): T{
    return arg
}


let myIdentify:  <T>(arg: T)  =>  T = identify
let myIdentify2: {<T>(arg: T): T} = identify  //带有调用签名的对象字面量来定义泛型函数

identify([1,2,3,4])
console.log(myIdentify(['mark','jay']))

