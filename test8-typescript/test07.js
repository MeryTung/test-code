//函数
// function add(x:number, y:number):number {
//     return x + y
// }
var obj = {
    name: 'Hello',
    bar: function () {
        return this.name;
    }
};
var str = 'hello world';
console.log(obj.bar());
// const obj = {
//     name: "yj",
//     getName() {
//       return this.name
//     },
//   }
//   const fn1 = obj.getName
//    console.log(fn1())
