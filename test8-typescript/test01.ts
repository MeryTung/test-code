//基本类型
// let isActive:boolean = true;
// let decLiteral: number = 6;
// let hexLiteral: number = 0xf00d;
// let binaryLiteral: number = 0b1010;
// let octalLiteral: number = 0o744;
// console.log(decLiteral,hexLiteral,binaryLiteral,octalLiteral)

// console.log(isActive)
// let title: string = 'typeScript'
// let message: string = `Hello, my name is ${title}`
// console.log(message)

// const list: number[] = [1,2,3,4]
// const list: Array<number> = [1,2,3,4]
// console.log(list)
//元组类型
// let x: [string,number];
// x =  ['hello',50];
// x[3] = ['typescript']
//越界的元素会报错
// console.log(x[0].substring(1))  
//error TS2322: Type 'string[]' is not assignable to type 'undefined'.
 //Tuple type '[string, number]' of length '2' has no element at index '3'.

//error TS2493: Tuple type '[string, number]' of length '2' has no element at index '5'.
// console.log(x[5].toString())
// console.log(x[1].substring(1))  //Error

//枚举类型
// enum Color {Red = 1,Green,Blue}
// let c: Color = Color.Red;
// let colorName:string = Color[2]
// console.log(c)
// console.log(colorName)
// console.log(Color)

//不知道类型
// let  noSure: unknown = 4
// noSure = 'Hello, typeScript! TypeScript!'
// noSure = true
// console.log(noSure)
//???????
// declare const maybe: unknown;
// const aNumber: number = maybe;
// if(maybe === true){
//     const aBoolean: boolean = maybe;
//     const aString: string = maybe;
// }

// if(typeof maybe ==='string'){
//     const aString: string = maybe;
//     const aBoolean: boolean = maybe;
// }
//any类型
// let notSure: any = 456;
// // notSure = 'Hello';
// // notSure = false;
// // console.log(notSure)
// notSure.isNotExists()
// notSure.toFixed()

// let pettySure: object = {};
// pettySure.toFixed() = function(){

// }

// let list: any[] = [1,true,'hello'];
// list[1] = 10000
// console.log(list)


//void
// function warnUser(): void {
//      console.log('this is warning message')
// }
// warnUser()

// let unusable: void = undefined;
// console.log(unusable)

// function error(message: string): never {
//    throw new  Error(message)
// }

// function fail() {
//     return error('出错')
// }

// declare function create(o: object | null): void;

// create({prop:1})
// create(null)
//  create(123)
//类型断言
let someValue: any = "hello,typeScript";
let strLength: number = (<string>someValue).length;
//第二种写法
let strLen: number = (someValue as string).length;

let message:String = 'hahah'
console.log(message)

function reverse(s: string): string {
    return s.split('').reverse().join()
}

console.log(reverse('hello world'))