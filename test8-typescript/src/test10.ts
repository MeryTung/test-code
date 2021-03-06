
//类定义
// class Greeter {
//     greeting: string;
//     constructor(message: string){
//         this.greeting = message;
//     }
//     greet(){
//         return 'Hello ' + this.greeting;
//     }
// }

// let greete = new Greeter("typescript");
// console.log(greete.greet())


//类继承

// class Animal {
//     movo(distanceInMeters: number = 0){
//         return `Animal moved  ${distanceInMeters}`
//     }
// }

// class Dog extends Animal {
//     bark() {
//         return 'Worf!Worf!'
//     }
// }

// let ani = new Animal();
// ani.movo(20);
// let dogg = new Dog();
// console.log(dogg.movo(30))
// console.log(dogg.bark())

// class Father {
//     private name: string;
//     constructor(theName: string){
//         this.name = theName
//     }
//     move(distanceInMeters: number = 0){
//         return `halo,number is ${distanceInMeters}`

//     }
// }

// class SonOne extends Father {
//     constructor(name:string){
//         super(name)
//     }
//     move(distanceInMeters = 5){
//         return 'Son-one'
//         super.move(distanceInMeters)
//     }
// }

// class SonTwo extends Father {
//     private name: string;
//     constructor(name: string){
//         super(name)
//     }
//     move(distanceInMeters = 60){
//         return 'Son-two'
//         super.move(distanceInMeters)
//     }
// }

// let father = new Father('father')
// let one = new SonOne('hello')
// let two = new SonTwo('halo')

// console.log(father = one)  //
//不能将类型”SonTwo“分配给类型”Father“.类型具有私有属性”namde“的单独声明
//其中一个类包含了私有属性，只有当另一个继承这个类的私有属性，并且都是来至同一声明，我们才认为是这两个类兼容。
//console.log(father = two) 
//console.log(one.name)  //私有成员只能在Father类内部使用，不能在实例化外部使用。
// console.log(one)
// console.log(one.move())
// console.log(two)
// console.log(two.move())

//TypeScript中，类成员默认是public

//protect被保护的，与private相同，有一点不同的是，protect可以在派生类中访问

// class  Father {
//     protected name: string;
//     protected constructor(name: string){
//         this.name = name
//     }    
// }


// class SonOne extends Father {
//     private department: string;
//     constructor(name: string,department: string){
//         super(name);
//         this.department = department
//     }
//     public getUserName(){
//         return `halo,my name is ${this.name} and I work the ${this.department}.`
//     }
// }

// let son = new SonOne('Mark','Ali');
// //let father = new Father('被保护了')  //类”Father“的构造函数时受保护的，仅可在类声明中访问。
// console.log(son.getUserName());
//console.log(son.name)  //属性”name“受保护，只能在类”Father及其子类中访问

//构造函数被标记被保护的，就不能进行实例化，但是能被继承。

//ReadOnly标识符
//只读属性必须在声明时或构造函数内初始化
// class Father {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor(theName: string){
//         this.name = theName
//     }
// }

// let father = new Father('hello typecsript')
// father.name = 'OMG' //无法分配到”name“，因为它=是只读属性
// console.log(father)

//参数属性：参数属性通过给构造函数参数添加一个访问限定符来声明。 使用private限定一个参数属性会声明并初始化一个私有成员；对于public和protected来说也是一样。
// class Father {
//     //构造函数定义的private name，是参数属性。舍弃了theName，仅在构造函数里使用private name: string参数来创建和初始化name成员。 我们把声明和赋值合并至一处。
//         constructor(private name: string){
    
//         }
//         move(distanceInMeters:number){
//             return `${this.name} moved ${distanceInMeters}`
//         }
// }

// class SonOne extends Father {
//       constructor(name: string){
//         super(name)
//       }
//       move(distanceInMeters = 20){
//         return `SonOne -- ${distanceInMeters} `
//       }
// }

// let father = new Father('Mark')
// let son = new SonOne('son')
// console.log(father.move(30))
// console.log(son.move())


//存取器 get set

// class Father {
//     fullName: string
// }

// let father = new Father()
// father.fullName = 'Mark Chao'
// if(father.fullName){
//     console.log(father.fullName)
// }



//改写成存取器
// let fullNameMaxLength = 10
// class Father {
//     private _fullName: string;
//     get fullName(): string  { 
//          //如果提示”访问器仅在面向ES5和更高版本时可用 “，就tsc test10.ts --t es5  或在tsconfig.ts加上 "target": "es5"属性
//         return this._fullName
//     }
//     set fullName(newName:string){
//         if(newName && newName.length > fullNameMaxLength){
//             throw new Error("fullName has a max length of" +  fullNameMaxLength )
//         }
//         this._fullName =newName
//     }
// }

// let father = new Father()
// father.fullName = 'Mark Chao'
// if(father.fullName){
//     console.log(father.fullName)
// }



//静态属性
//  class Gird {
//     static origin = {x: 0,y:0}
//     calculateDistanceFromOrigin(point:{x:number,y:number}){
//         let xDist = (point.x - Gird.origin.x)
//         let yDist = (point.y - Gird.origin.y)
//         return Math.sqrt(xDist * xDist + yDist * yDist) /this.scale
//     }
//     constructor(public scale:number){  //public scale参数属性

//     }
//  }

//  let gird = new Gird(1.0)
//  console.log(gird.calculateDistanceFromOrigin({x:10,y:10}))

//抽象类
//  abstract class Father {
//     abstract name: string;
//     move():void {
//         console.log('这是一个抽象类')
//     }
//  }

//抽象类的抽象方法不包含具体实现方法，且必须在派生类中实现
// abstract class Father {
//      constructor(public name:string){}
//      printName():void { console.log(`${this.name}`)}
//      abstract printMeeting():void // 必须在派生类实现，它在这里不能实现

// }
//  class SonOne extends Father {
//      constructor(public name: string){
//         super(name)
//      }
//      printName():void{ console.log(this.name)}
//      printMeeting():void { console.log('The Accounting Department meets each Monday at 10am')}
//  }

//  //let father = new Father() //错误，无法创建抽象类的实例
//  let son = new SonOne('Mark Chao')
//  son.printName()
//  son.printMeeting()

//构造函数

// class Father {
//     constructor(public greeting: string){ }  //参数属性
//     greet(){
//         return " Helo " + this.greeting
//     }
// }

// let father = new Father('World');
// console.log(father.greet())

//实例部分，静态部分
// class Father {
//     static standerGreeting = " Hello, world! ";
//     constructor(public greeting?: string){}
//     greet(){
//         if(this.greeting){
//             return 'Hello' + this.greeting
//         }else{
//             return 'Hello'
//         }
//     }
// }

// let father = new Father('有值');
// Father.standerGreeting = 'Hello，Mark' //修改静态的值

// console.log(father.greet())


//类可以创建两个东西
//1、类的实例类型
//2、一个构造函数
//类可以做接口
//因为类创建类型，所以你在允许使用接口的地方使用类。

class  Point {
    x:number;
    y:number
}

interface Ponit3d  extends Point{
    z:number
}

let point3d: Ponit3d = {x:1,y:2,z:3}