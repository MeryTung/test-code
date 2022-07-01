//可以为null的类型
// let exampleString = "foo";
// exampleString = null;
//  console.log(exampleString)

 
// class C {
//     a:number;
//     b?:number;
// }

// let ctr = new C();
// ctr.a = 10;
// ctr.a = undefined;
// ctr.b = 12
// console.log(ctr)

//类型别名

// type Name = string
// type NameResolver = () => string
// type NameOrResolver = Name | NameResolver

// function getName(n:NameOrResolver):Name {
//         if(typeof n === "string"){
//             return n
//         }else{
//             return n()
//         }
        
// }

// type Tree<T> = {
//     value: T,
//     left:Tree<T>,
//     right:Tree<T>
// }


// //多态的this
// class Father {
//     public constructor(protected value:number = 0){}
//     public  currentValue():number {
//         return this.value
//     }
//     public add(o: number):this{
//         this.value += o
//         return this
//     }
//     public multi(o:number):this {
//         this.value *= o
//         return this
//     }
// }

// class SonOne extends Father {
//         public constructor(value = 0){
//             super(value)
//         }
//         public sin(){
//             this.value = Math.sin(this.value)
//             return this
//         }
// }

// let v = new Father(5)
//         .add(2)
//         .multi(6)
//         .currentValue()
// let v2 = new SonOne(2)
//         .multi(5)
//         .sin()
//         .add(1)
//         .currentValue();
// console.log(v)
// console.log(v2)

// //索引类型

// function pluck<T, K extends keyof T >(o:T,propertyNames:K[]):T[K][]{
//     return  propertyNames.map(n => o[n])

// }

// interface Car {
//     manufacturer: string;
//     model: string;
//     year: number;
// }

// let taxi: Car = {
//     manufacturer: 'Toyota',
//     model: 'Camry',
//     year: 2014
// }

// console.log(pluck(taxi,['manufacturer']))


// //keyof T 索引类型查询操作符

// let  carProps: keyof Car;

// //T[K]索引访问操作符 o[propertyNames]
// function getPrototype<T, K extends keyof T>(o:T,propertyNames:K):T[K] {
//     return o[propertyNames]
// }

//索引类型和字符串索引签名
interface Dictionary<T> {
    [key:string]:T
}

let keys: Dictionary<number>= {'0':1,'1':2,'2':3}
let keys2: keyof Dictionary<number>;
let value:Dictionary<number>['foo'];


interface  Directions<T> {
    [key:number]:T
}

let keys3:Directions<number> = {'0':1,'1':2,'2':3}





 console.log(keys.foo)