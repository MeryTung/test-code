//交叉类型:多个类型合并成一个类型
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// }
// function extend<First,Second>(first: First, second: Second):First & Second{
//     let result:Partial<First&Second> = {}
//      for(const prop in first) {
//         if(first.hasOwnProperty(prop)){
//             (result as First)[prop] =  first[prop]
//         }
//      }
//      for(const prop in second) {
//         if(second.hasOwnProperty(prop)){
//             (result as Second)[prop] = second[prop]
//         }
//      }
//      return result as First & Second
// }
// class Father {
//     constructor(public name: string){}
// }
// interface Loggable {
//     log(name: string):void
// }
// class SonOne implements Loggable {
//     log(name){
//         console.log(`Hello, I am ${name}`)
//     }
// }
// let jim = extend(new Father('Mark'),SonOne.prototype)
// console.log(jim.name)
// type People = {
//     name: string,
//     age: number
// }
// // type DemoPeople = Partial<People>
// //相当于
// type DemoPeople = {
//     name?: string,
//     age?: number
// }
// let obj: DemoPeople ={
// }
// console.log(obj)
//交叉类型&&
// function extend<First,Second>(first: First, second: Second):First & Second{
//     let result: Partial<First & Second> = {};
//     for(let prop in first){
//         if(first.hasOwnProperty(prop)){
//             (result as First)[prop] = first[prop]
//         }
//     }
//     for(let prop in second){
//         if(second.hasOwnProperty(prop)){
//             (result as Second)[prop] = second[prop]
//         }
//     }
//     return result as First & Second
// }
// class Father {
//     constructor(public name:string){}
// }
// interface Loggable {
//     log(name:string):void
// }
// class SonOne  implements  Loggable {
//     log(name:string){
//         return `my name is ${name}`
//     }
// }
// let son = new SonOne()
// let father = extend(new Father('Mark'),SonOne.prototype)
// console.log(father.log('Chao'))
// console.log(son)
//联合类型
function padLeft(value, padding) {
    if (typeof padding === 'string') {
        return Array(padding).join("") + value;
    }
    if (typeof padding === 'number') {
        return padding + value;
    }
    throw new Error('错误');
}
console.log(padLeft('1', true));
