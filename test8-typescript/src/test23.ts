////迭代器和生成器
// let  obj1 = {
//     a:1,
//     b:'hello', 
//     c:'TypeScript',
//     d:10
// }

// let obj2 = [1,'hello',2,'TypeScript']

// for(let k in obj1) {
//     console.log(obj1[k])  //for...in获取对象的键列表
// }

// for(let v of obj2){
//     console.log(v)   //for...of获取对象的键对应的值
// }

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for(let pet in pets){
    console.log(pet)
}

for(let pet of pets){
    console.log(pet)
}