//泛型
//  function identify<T>(arg: Array<T>):Array<T> {
//     console.log(arg.length)
//     return arg
//  }
     
//  console.log(identify([1,2,3]))

//或者
// function identify<T>(arg: T[]):T[] {
//     return arg
// }
// console.log(identify([1,2,3]))

//泛型函数类型
//非泛型函数类型,类似于函数声明一样
// function identify<T>(arg: T): T{
//     return arg
// }


// let myIdentify:  <T>(arg: T)  =>  T = identify
// let myIdentify2: {<T>(arg: T): T} = identify  //带有调用签名的对象字面量来定义泛型函数

// identify([1,2,3,4])
// console.log(myIdentify(['mark','jay']))



//泛型接口
// interface GenericIdentityFn<T> {
//     (arg:T): T
// }

//泛型函数
// function identify<T>(arg: T): T{
//     return arg
// }

// let myIdentify: GenericIdentityFn<number> = identify

// console.log(myIdentify(1))

//泛型类
// //泛型类指的是类的实例部分,所以类的静态属性不能使用这个泛型类型
// class Father<T> {
//     zeroNumber: T;
//     static UserName = 1;
//     constructor(){}
//     add:(x: T, y: T) => T
// }

// let father = new Father<string>()
// father.zeroNumber = 'halo';
// father.add = function(x ,y){
//     return x + y
// }
// console.log(father.add('Mark','Chao'))
// console.log(Father.UserName)


//泛型约束
//不是所有类型都有length属性,这里需要对泛型做约束
// //现在这个Foo泛型函数约束了,因此它不再适用任何类型
// interface Lengthwise {
//     length: number;
// }

// function Foo<T extends Lengthwise>(arg:T):T{
//     console.log(arg.length)
//     return arg
// }

// //我们传入符合约束类型的值,必须包含必须的属性,这里是length
// let foo = Foo({length:10,value:3})
// //let foo = Foo(1)  //类型"number" 的参数不能赋给类型Lengthwise的参数
// console.log(foo)


//在泛型约束中使用类型参数
//keyof 操作符是在 TypeScript 2.1 版本引入的，该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。
// function getPrototype<T,K extends keyof T>(obj:T,key:K){
//     return obj[key]
// }

// let obj = {a:1,b:2,c:3,d:4,e:5}
// console.log(getPrototype(obj,'a'))

//创建工厂函数
// function create<T>(c:{new (arg): T},arg:T):T{
//     return new c(arg)
// }

// class Father {
//     static thisName:'Mark'
//     constructor(arg){
//         console.log(arg)
//     }
// }

// let father = create(Father,'Hello')
// console.log(father)

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: '123';
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

let lion = new Lion();
console.log(lion.keeper)
console.log(createInstance(Lion));  
createInstance(Bee); 