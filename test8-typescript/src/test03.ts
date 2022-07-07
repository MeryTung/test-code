//类类型
//实现接口

// interface ClockInterface {
//     currentTime: Date;
//     //在接口里写方法
//     setTime(d:Date):void
// }

// class Clock implements ClockInterface {
//     currentTime: Date = new Date();
//     setTime(d:Date){
//         this.currentTime = d
//     }
//     constructor(h: number, m: number) {

//     }
// }

// interface ClockInterface {
//     new (hour: number, minute: number)
// }

// class Clock implements ClockInterface {
//     //报错，类型Clock提供的内容与签名 new (hour: number, minute: number),不匹配
//     currentTime: Date;
//     //一个类实现接口时，只对其实例部分进行类型检查
//     //构造函数属于静态部分
//     constructor(h: number, m: number){

//     }
// }

// interface  ClockConstruct {
//     new (hour: number, minute: number): ClockInterface
// }

// interface  ClockInterface {
//     tick(): void
// }

// class Clock implements ClockInterface {
//     constructor(h: number, m: number){}
//     tick(){
//         console.log('beep beep')
//     }
// }

// function createClok(
//     ctor: ClockConstruct,
//     hour: number, 
//     minute: number

// ): ClockInterface {
//     return new ctor(hour, minute)
// }

//  let clok = createClok(Clock,12,17)

//  console.log(clok)

// interface  ClockConstruct {
//     new (hour: number, minute: number): ClockInterface
// }

// interface ClockInterface {
//     tick(): void
// }


// class DigitalClock implements ClockInterface {
  
//     tick(){
//         return 'Hello'
//     }
// }

// function createClok(
//     ctor: ClockConstruct,
//     hour: number,
//     minute: number
// ):ClockInterface {
//     return new ctor(hour, minute)
// }

// let digital = createClok(DigitalClock,12,17)
// console.log(digital.tick())
//声明静态部分接口，用来约束构造函数声明，返回实例实例部分接口类型
// interface  studentConstructor {
//     new (id: number, stuName: string, stuAge: number)
// }
// //声明实例部分接口
// interface  studentInterface {
//     go():void
// }


// //声明构造函数方法，调用静态部分接口进行实例化对象操作
// function createStudent(
//     ctor:studentConstructor,
//     id:number, stuName:string, stuAge:number
// ):studentInterface {
//     return new ctor(id, stuName, stuAge)
// }

// //声明类，声明时实现实例部分接口
// class  DigitalStudent  implements  studentInterface {
//     id:number;
//     stuName: string;
//     stuAge:number;
//      constructor(i:number,n:string, a: number){
//         this.id = i;
//         this.stuName = n;
//         this.stuAge = a

//      }
//      go(){
//         return 'hello'
//      }
// }

// //传入构造函数来实例化对象
// const stu1 = createStudent(DigitalStudent,1,'Mark',38)

// console.log(stu1)


interface  studentConstructor {
    new (id:number, stuName:string, stuAge: number)
}

interface studentInterface {
    go():void
}

const Clock:studentConstructor = class Clock implements studentInterface {
    id:number;
    stuName:string;
    stuAge:number;
    constructor(id:number,stuName:string, stuAge: number){
        this.id = id;
        this.stuName= stuName;
        this.stuAge = stuAge
    }
    go(){

    }
}


const xiaoming = new Clock(1,'xiaoming,',20)
console.log(xiaoming)