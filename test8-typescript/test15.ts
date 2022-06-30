//类型守卫和类型区分

// interface  Bird {
//     fly();
//     legEggs();
// }

// interface Fish {
//     swim();
//     legEggs();
// }

// function getSmallpet(): Fish | Bird {
//      return 
// }

// let pet = getSmallpet();
// // if((pet as Bird).fly){
// //     (pet as Bird).fly()
// // }else if((pet as Fish).swim){
// //     (pet as Fish).swim
// // }

// //用户自定义类型守卫

// //使用类型判断
// function isFish(pet: Fish | Bird):pet is Fish {
//     return (pet as Fish).swim !==undefined
// }

// if(isFish(pet)){
//     pet.swim()
// }else{
//     pet.fly()
// }

// //使用in来判断
// function move(pet:Fish | Bird) {
//     if('swim' in pet){
//         return pet.swim()
//     }
//     return pet.fly()
// }


// //用typeof来判定
// function isNumber(x:any): x is number {
//     return typeof x === 'number'
// }

// function isString(y:any):y is string {
//     return typeof y === 'string'
// }

// function padLeft(value:string,padding:string | number) {
//     if(isNumber(padding)){
//         return Array(padding+1).join(" ") +value
//     }
//     if(isString(padding)){
//         return padding + value
//     }
//     throw new Error('error')
// }
// /必须要定义一个函数来判断类型是否是原始类型，这太痛苦了。
// 幸运的是，现在我们不必将typeof x === "number"抽象成一个函数，因为TypeScript可以将它识别为一个类型守卫。
//也就是说我们可以直接在代码里检查类型了。
//这些_typeof类型守卫_只有两种形式能被识别：typeof v === "typename"和typeof v !== "typename"，"typename"必须是"number"，"string"，"boolean"或"symbol"
// 但是TypeScript并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型守卫。


//instanceof类型守卫

interface Padder {
    getPaddingString():string
}

class SpaceRepeatingPadder implements Padder {
     constructor(private numSpace:number){}
     getPaddingString(){
        return Array(this.numSpace + 1).join(" ")
     }
}

class StringPadder implements  Padder {
    constructor(private value: string){}
    getPaddingString(){
        return this.value
    }
}

function getRandomPadder(){
    return Math.random() < 0.5 ? new  SpaceRepeatingPadder(4) : new StringPadder(" ")
}

let padder:Padder =  getRandomPadder();
if(padder instanceof SpaceRepeatingPadder){
    console.log(padder)
}
if(padder instanceof StringPadder){
    console.log(padder)
}