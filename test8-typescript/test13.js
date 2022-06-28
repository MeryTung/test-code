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
function identify(arg) {
    return arg;
}
//非泛型函数类型
var myIdentify = identify;
identify([1, 2, 3, 4]);
console.log(myIdentify(['mark', 'jay']));
