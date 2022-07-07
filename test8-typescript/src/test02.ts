//接口

// interface LabelValue {
//     label: string
// }
// function  printLabel(labelObj:  LabelValue) {
//     console.log(labelObj.label)
// }



// let myObj = { size:10, label: 'hello'}

// printLabel(myObj)
//
// interface SquareConfig{
//     color?: string;
//     width?: number;
//     //额外的属性检查
//     [propName:string]:any
// }

// function createSquare(config: SquareConfig): { color: string; area: number,} {
//         let newSquare = { color: 'white',area: 100}
//         if(config.color){
//             newSquare.color = config.color
//         }
//         if(config.width){
//             newSquare.area = config.width * config.width
//         }
//         return newSquare
// }

//let mySquare = createSquare({colour:'black', width: 100} as SquareConfig) 第一种用断言类型
// let mySquare = createSquare({colour:'black', width: 100})  //第二种，添加字符串索引签名propName

// let squareOptions = { colour2: "red" };
// let mySquare2 = createSquare(squareOptions);
// console.log(mySquare2)
// console.log(mySquare)

//只读属性

// interface  Point {
//     readonly x: string;
//     readonly y: string;
// }


// let p1: Point = {x: 'hello', y: 'world'}
// p1.x = 'ESC'

// let a:number[] = [1,2,3,4,5];
// let ro:ReadonlyArray<number> = a
// ro[0] = 12
// ro.push(5)
// ro.length = 100
// a = ro

// a = ro as number[]


//函数类型
// interface SearchFunc {
//     (source: string,substring: string): boolean
// }

// let mySearch: SearchFunc
// mySearch = function(source: string,substring: string) {
//     let result = source.search(substring)
//     return result>-1
// }

// mySearch = function(src, sub) {
//     let result = src.search(sub)
//     return result > -1
// }



// console.log(mySearch('http://www.baidu.com','/\w+/'))

//可索引的类型
//两种索引签名：string,number
// interface StringArray {
//     // [index:number]: string
//     [index:string]:string
// }

// let myArray:StringArray
// // myArray = ['Bool','hahah']
// // console.log(myArray[0])
//  myArray = {
//     a:'hello', y:' typescript'
//  }
// console.log(myArray['a'])

// class Animal {
//     name:string
// }

// class Dog extends Animal {
//     breed: string
// }

// interface notOkey {
//     [index:number]: Animal;
//     [index:string]: Dog;
    

// }

// let myArray: notOkey = {a:'hello',['heloo','world']}

// interface NumberDictionary {
//     [index:string]:number | string;
//     length:number;
//     name:string
// }


// interface ReadonlyStringArray {
//     readonly [index:string]:string
// }

// let myArray2: ReadonlyStringArray = {a: 'hello', b: 'world'}
// myArray2['a'] = 'Jack'


