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
function getSmallpet() {
    return;
}
var pet = getSmallpet();
pet.layEggs();
