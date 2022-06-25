//继承接口

// interface Shape {
//     Color: string
// }

// interface Square extends Shape {
//     sideLength: number
// }

// let square = {} as Square
// square.sideLength = 100
// square.Color = 'blue'

// console.log(square)

//一个接口可继承多个接口，创建出多个接口的集合接口
interface Shape {
    color: string
}

interface PenStock {
    penWidth: number
}

interface Square extends Shape, PenStock {
    sideLength: number
}

let square = {} as Square
square = {color: 'green',penWidth: 10, sideLength: 20}
console.log(square)