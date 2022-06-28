//异构枚举
//从技术的角度来说，枚举可以混合数字和字符串成员，但不建议你这样做。除非你真的想用javascript运行时的行为
// enum  GeneousEnum {
//     No = 0,
//     Ok = "Yes"
// }

//计算的和常量成员
//会当作成常量成员
//1. 第一个成员没有初始化，这种情况下它被赋值为0
// enum E {
//     X
// }

//2. 不带有初始值且它之前的枚举成员是—数字-常量—，这种情况下，当前枚举成员的值为上一个枚举值加1
// enum F {
//     X = 2,
//     Y = 3,
//     Z 
// }

// console.log(F.Z)

// 当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：

// 1.一个枚举表达式字面量（主要是字符串字面量或数字字面量）
// 2.一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
// 3.带括号的常量枚举表达式
// 4.一元运算符+, -, ~其中之一应用在了常量枚举表达式
// 5.常量枚举表达式做为二元运算符+, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。

// enum FileAccess {
//     None,
//     Read =  1 << 1,
//     Write = 1 << 2,
//     ReadWrite = Read | Write,
//     G = '123'.length
// }

// console.log(FileAccess.Write)

//联合枚举和枚举成员类型
//非计算常量枚举成员的子集：字面量枚举成员
//字面量枚举成员，只不带有初始值的常量枚举成员，或值被初始化为数字，字符串，一元 -富豪的数字字面量
//字面量枚举成员称为了类型，
// enum ShapeKind {
//     //1.不带有初始值的常量枚举成员
//     Circle,
//     Square
//     //被初始化为数字，字符串，一元 -富豪的数字字面量
//     // Circle = 'helo',
//     // Square ='world'
// }

// interface  Circle {
//     kind: ShapeKind.Circle,
//     radius: number
// }

// interface  Square {
//     kind: ShapeKind.Square,
//     sideLength: number
// }

// let c: Circle = {
//     kind: ShapeKind.Circle,
//     radius: 100
// }

// console.log(ShapeKind)

//枚举类型本身变成了每个枚举成员的_联合_

// enum E {
//     Foo,
//     Bar
// }

// function f(x:E){
//     if(x!= E.Foo || x!= E.Bar){

//     }else{

//     }
// }

//运行时枚举类型
// enum E {
//     X,
//     Y,
//     Z
// }

// function f(obj:{X:number}){
//     return obj.X
// }

// console.log(f(E))
//编译时枚举类型
// enum  LogLevel {
//     ERROR,WARN,INFO,DEBUG
// }

// //类似字面量
// type LogLevelString = keyof typeof LogLevel
// /**
//  * 等同于：
//  * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
//  */
// let num:LogLevelString = 'ERROR'
// console.log(num)
// function printImportant(key:LogLevelString,message:string){
//         let num = LogLevel[key];
//         if(num <= LogLevel.WARN){
//             console.log('Log level key is:', key);
//             console.log('Log level value is:',num);
//             console.log('Log level message is:',message)
//         }
// }

// printImportant('ERROR','This is a message')

//反向映射
//不会为字符串枚举成员生成反向映射
// enum F {
//     A
// }

// let a = F.A
// console.log(F[a])

//常量枚举成员
//常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。
//减少编译环境代码
// console.log([1 /* E.A */, 2 /* E.B */]); 
// const  enum E{
//     A = 1,
//     B =  A * 2
// }


// console.log([E.A,E.B])

// declare enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }

// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
//declare 定义的类型只会用于编译时的检查，编译结果中会被删除。
//declare enum E 在编译时会检查,编译结果会被删除
declare  enum F {
    X = 1,
    Y,
    Z = 2
}

console.log(F.Y)  //编译后结果为console.log(F.Y);

declare const  enum E {
    X = 1,
    Y,
    Z = 2
}

console.log(E.Y)  //console.log(2 /* E.Y */);

