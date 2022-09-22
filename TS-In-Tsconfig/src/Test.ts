// import { TestWidget, UserInfo, Widget } from "./tpl";
// import { B } from '../../test8-typescript/src/test21';

// export class Test {
//     w: Widget;
//     t: TestWidget
// }

// let user: UserInfo = {
//     user: 'Tina',
//     age: 30
// }


// function foo(input: string) {
//     return input
// }

// foo("Mark")

// let youNames =  'Tiname';
// let  xuehao: number = 10;
// const tmp1:string = null;
// const tmp2:string = undefined;

// function fun1(){

// }

// function fun2() {
//     return 
// }

// function fun3(){
//     return undefined;
// }

// // let arr: string[] =  ["Yuan","Mark","Tina"];
// let  arr: [string,string,string] = ["Yuan","Mark","Tina"]
// //console.log(arr[599])
// let arr2: [name:string, age: number, male?: boolean] = ["Mark", 30, true]
// console.log(arr2)

// const arr3: number[] = [];
// const [ele1,ele2,...rest] = arr3;
// // const [name,age,male,other] = arr2
// const [name,age,male] = arr2;
// console.log(name)
// console.log(rest)
// // console.log(ele1)
// // console.log(ele2)
// // console.log(rest)

// // console.log(youNames);
// // console.log(xuehao)
// // console.log(void(0))


// interface Descriptor {
//     name: string, 
//     age: number
//     male: boolean,
//     func?: Function
// }

// let obj1: Descriptor = {
//     name: 'Mark',
//     age: 30,
//     male: true,
//     func:() => {}
// }

// obj1.func = () => {}

// // console.log(131.4/258)
// // console.log(128/208)
// // console.log(520/1122)

// type Emun =  {
//     One,
//     Two,
//     three
// }

// const tmp3: Object = null;
// const tmp4: Object = undefined;
// const tmp5: Object = [];
// const tmp6: Object = {};
// const tmp7: Object = Symbol(1);
// const tmp8: Object = "typescript";
// const tmp9: Object = 1;
// const tmp10: Object = BigInt(1);
// const tmp11: Object = true;
// const tmp12: Object = () => console.log('hello')


// //object的引入是为解决对Object类型错误使用，它代表所有非原始类型，Object,Function,Array
// const obj2: object = () => {}
// const obj3: object = [1,2,3,4,5];
// const obj4: object = { }

// const obj5: {} = undefined;
// const obj6: {} = null;
// const obj7: {} = void 0;
// const obj: {} = [1,2];
// const obj8: {} = () => {}

// const list:Record<number, unknown[]> = {
//       1: [1,2,34]
// }

// //字面量类型

// interface  Tmp {
//     bool: true | false,
//     num: 10001 | 10002 | 10003,
//     data: any
// }

// let tmp20: Tmp = {
//     bool: true,
//     num: 10002,
//     data: [1,2,3,4]
// }

// const returnNum = () => 100 + 499
// enum Items {
    
//     Foo = returnNum(),
//     Bar = 599,
//     Baz,
    
    
// }
// console.log(Items.Foo)
// console.log(Items.Bar)
// console.log(Items.Baz)

// enum NumAuto {
//     A,
//     B,
//     C
// }

// console.log(NumAuto.A)
// console.log(NumAuto[0])

// const enum NumAuto2 {
//     A,
//     B,
//     C
// }
// console.log(NumAuto2.A)

// const bar2 = 'Mark';
// let foo2 =  'Mark'


// //函数

// function funcFoo(name:string): number {
//         return name.length
// }
// const funcFoo2: (name: string)=> number =  function(name) {
//     return name.length
// }

// type funcType = (name: string) => number
// const funcFoo3: funcType =  function(name) {
//     return name.length
// }

// interface funcStruct {
//     (name:string):number
// }

// const funcFoo4:funcStruct = function(name) :number{
//     return name.length
// }


// console.log(funcFoo('陈思成'))
// console.log(funcFoo2('chensicheng'))

// //void

// function baz(){

// }

// function baz2(){
//     return;
// }


// //可选参数
// function bar4(name:string,age = 20){
//      let inputAge = age | 18;
//      return `My name is ${name}, I'm  ${age} year`
// }


// function bar5(arg1:string,...rest:any[]){
//     return arg1 +' ,'+ rest
// }

// function bar6(args:string,...rest:[boolean,number]){
//     return args + ', ' + rest
// }
// console.log(bar4('陈思成'))
// console.log(bar5('chen',[1,2,3,4,5]))
// console.log(bar6('Mark',true,20))


//重载
// function func(foo:number,bar?:false): number;
// function func(foo:number,bar?:true): string;
// function func(foo:number,bar?:boolean): string | number {
//        if(bar){
//           return String(foo)
//        }else{
//         return foo
//        }
// }

// console.log(123,true)

// abstract class AbsFoo {
//     absProp: string;
//     abstract get absGetter():string;
//     abstract absMethod(name:string):string
// }


// class Foo implements AbsFoo {
//     absProp:string =  'chensicheng';
//     get absGetter() {
//         return '7岁'
//     }
//     absMethod(name){
//         return name
//     }
// }

// abstract  class AbsBaz {
//     //abstract static username = 'TypeScript';   //static与abstract一起使用
//     static username = 'TypeScript';
//     abstract get absGetter():string;
// }

// class BarClass implements AbsBaz { 
//     get absGetter(){
//         return 'hello'
//     }
// }

// console.log(AbsBaz.username)


// class  FooClass {
//     public static username: string = 'Mark';
//     private constructor(user2:string,age:number){
//         return user2 + ',' + age
//     };
//     public static getFoo(a,b){
//         let newFoo = new FooClass(a,b)
//           return newFoo
//     }
   
// }


// console.log(FooClass.getFoo('chen',10))


// //let fool = new FooClass('陈思成',7)  私有构造函数，不允许实例化


// let foo10;

// function foo11(name,age){

// }

// let anyVar:any = 'chensicheng'
// let unknownVar:unknown = 'chensicheng';
// unknownVar = true;
// unknownVar = () => {};

// let bar1:string = anyVar
// // let bar2:string = unknownVar;  //Error
// let bar2:any = unknownVar;
// type UniqueWithNever = '陈思成' | 599 | false | void | never;

// const arr1:string[] = []
// arr1.push('chensicheng');
// console.log(arr1)

// let obj1;


// let element = document.getElementById('#id')!;

// interface IStruct {
//     foo: string;
//     bar: {
//       barPropA: string;
//       barPropB: number;
//       barMethod: () => void;
//       baz: {
//         handler: () => Promise<void>;
//       };
//     };
//   }

// //   const obj2: IStruct = {};
//   const obj3 = <IStruct>{

//     foo: 'hello',
//         bar: {
//             baz: {
//                 handler: () => {
//                     return Promise.resolve()
//                 }
//             }
//         }
//   }


//   interface D {
//     key: string;
//     name?: string
//   }

//   let d:D =  {
//     key: '123',
//     name: 'mark'
//   }

//   type strAndNum = string & number;
//   type Struct1 = {
//     primitiveProp: string;
//     objectProp: {
//         name: string
//     }
//   }

//   type Struct2 = {
//     primitiveProp: number;
//     objectProp: {
//         age:number
//     }
//   }

//   type Composed = Struct1 & Struct2;

//   type PrimitivePropType = Composed['primitiveProp'];
//   type ObjectPropType = Composed['objectProp'];

//   interface AllStringType {
//     [key: string]: string
//   }

//   type AllStringTypes = {
//     propA: boolean;
//     propB: string;
//      [key:string]: any
//   }

//   type prop1 = AllStringType['chensicheng'];

// let foo: AllStringType= {
//     "chensicheng": '599'
// }

// interface Foo2 {
//     chensicheng: 10,
//     101: 3
// }

// type FooKeys = keyof Foo2;

// interface FooType {
//     prop1: string,
//     prop2: string, 
//     prop3: string,
//     prop4: string,
// }


// //映射类型
// type Stringify<T> = {
//     [k in  keyof T]: string
// }

// type StringfiedType = Stringify<FooType>;

// const func1 = (name: string) => { return name.length > 10}
// const func2: typeof func1 = (name: string) => { return name === 'chensicheng'}

// type FuncReturnType = ReturnType<typeof func1>

// let isValid: typeof func2

// function assert(condition: any, msg?: string): asserts condition {
//     if (!condition) {
//       throw new Error(msg);
//     }
//   }

//   let name2: any = 'linbudu';

// function assertIsNumber(val: any): asserts val is number {
//   if (typeof val !== 'number') {
//     throw new Error('Not a number!');
//   }
// }

// console.log(assertIsNumber(name2));

// // // number 类型！
// // name2.toFixed();
// function yell(str) {
//     assert( typeof str === 'string');
//     return str.toUpperCase();
// }

// console.log(yell('123'))

// import assert from 'assert';

// let name: any = 123;

// assert(typeof name === 'string');

// function assert(condition: any, msg?: string): asserts condition  {
//     if (!condition) {
//       throw new Error(msg);
//     }
//   }


//   function assertIsNumber(val: any): asserts val is number {
//         if(typeof val!== 'number'){
//             // throw new Error('Not a number!');
//             throw new Error(
//                 `Expected 'val' to be defined, but received ${val}`
//               );
//         }
//   }
//   let name2: any = true
// //   assert(typeof name2 === 'number','不是一个number');  //报错后，不继续后面的操作了
// //  assertIsNumber(true)
// //  console.log(123)

//  interface Struct1 {
//     privateProp: string;
//     objectProp: {
//         name: string
//     },
//     unionProp: string | number
//  }

//  interface  Struct2 extends Struct1 {
//     privateProp: string;
//     objectProp: {
//         name: string,
//         age: number
//     }
//     unionProp: string
//  }

//  type Struct3 = {
//     name: string
//  }

//  interface Struct4 extends Struct3 {
//      name: string, age: number
//  }

// type Base1  = {
//      name: string
//  }

//  type  Base2 = Base1 & {
//     age: number
//  }

//  let foo: Base2 = {
//     name: 'Tang',
//     age: 30
//  }


//  function ensureArray(input: number | number[]): number[] {
//     if (Array.isArray(input)) {
//       return input;
//     } else {
//       return [input];
//     }
//   }
  
//   interface Foo {
//     kind: 'foo';
//     diffType: string;
//     fooOnly: boolean;
//     shared: number;
//   }
  
//   interface Bar {
//     kind: 'bar';
//     diffType: number;
//     barOnly: boolean;
//     shared: number;
//   }
  
//   function handle1(input: Foo | Bar) {
//     if (input.kind === 'foo') {
//       input.fooOnly;
//     } else {
//       input.barOnly;
//     }
//   }

//   function handle2(input: Foo | Bar) {
//     let aa = typeof input.diffType
//     console.log()
//     // 报错，并没有起到区分的作用，在两个代码块中都是 Foo | Bar
//     if (typeof input.diffType === 'string') {
//       input.fooOnly;
//     } else {
//       input.barOnly;
//     }
//   }

//   handle2({
//     kind: 'foo',
//     diffType:'hello',
//     fooOnly: true,
//     shared: 123
//   })


//   function isString(input:unknown):  input is number {
//     return typeof input === 'string'
//   }

//   function foo2(input: string | number) {
//     if(isString(input)){
//         //不会对逻辑和实际类型的检测，
//         //这里的input 为 number类型，所以会报错。
//         //(input).replace('hello','TypeScript')
//     }
//   }

type Factory<T = boolean> = T | string | number;

type data1 = {
    username: string,
    age: number,
}
let myName: Factory = true

type IsEqual<T> =  T extends true ? 1 : 2;
type A = IsEqual<true>;
let foo2:A = 1


//泛型约束

function add(source:number, add: number) {
  if(typeof source !=='number'  || typeof add !== 'number') {
    throw new Error('Invalid arguments!')
  }
  return source + add
}


type ResStatus<ResCode extends number = 10001> =  ResCode  extends 10001 | 10002 | 10003 ? ' true' : 'false'

type res1 = ResStatus<10003>
type res2 = ResStatus<10004>
type res4 = ResStatus;
//type res3 = ResStatus<'10001'>    //类型“string” 不满足约束“number”


//多泛型，之间还存在联系
type  Condition<Type,Condition,TruthyResult,FalsyResult> =  Type extends Condition ? TruthyResult : FalsyResult

type condit1 =  Condition<1,string,true,false>

function handle<T extends string | number>(input: T):T { return input}
const author = 'tina';
let authorAge = 18;
handle(author)
handle(authorAge)
// handle({name:'Mark',age:30})

function swap<T extends number, U extends number>([start, end]: [T, U]): [U, T] {
    return [end, start];
  }
  
  //const swapped1 = swap(["linbudu", 599]);    //不能将类型“string” 分配给类型“number”
  //const swapped2 = swap([null, 599]);
  //const swapped3 = swap([{ name: "linbudu" }, {}]);  //不能将类型“{ name:string}”分配给类型“number”

// class Cat {

//     foo(){

//     }
// }

// class Dog {
//     foo() {

//     }
//     bar(){}
// }

// function feetCat(cat:Cat){

// }

// feetCat(new Dog())

type USD =  number;
type  CNY = number;

const USDcount:USD = 100;
const CNYcount:CNY = 200;

function addCNY(source:CNY,input:CNY){

}

addCNY(USDcount,CNYcount)


interface  SuccessResult {
    data: unknown;
    code: number
}

interface FailedResult {
    error: unknown,
    code: number
}

function isSuccess(res: SuccessResult | FailedResult): res is SuccessResult {
    return "data" in res;
  }

function  handler(input: SuccessResult | FailedResult) {
    return new Promise((resolve,reject)  => {
         if(isSuccess(input)){
            resolve(input.data)
         }else {
            reject(input.error)
         }
    })
}

let foo: any;  //any可以赋给任意类型，这里意味着any放弃了类型检查
//foo.bar().baz()

let foo1: unknown;  //unknown只能赋给unhnown和any类型
//foo1.bar().baz()

const strOrNum: string | number  | boolean =  false;
if(typeof strOrNum === 'string') {
    console.log('str')
}else if(typeof strOrNum === 'number'){
    console.log('num')
}else if(typeof strOrNum === 'boolean') {
    console.log('boolean')
}else {
    const _exhaustiveCheck: never = strOrNum;
    throw new Error(`Unknown input type: ${_exhaustiveCheck}`);
}


interface Action<T> {
      payload?: T;
      type: string;
    }
    
    // 假设有Modle这样一个interface
    interface Module {
      count: number;
      message: string;
      asyncMethod<T, U>(action: Promise<T>): Promise<Action<U>>;
      syncMethod<T, U>(action: Action<T>): Action<U>;
    }
    
    type PickFuncProp<T> = {
        [P in keyof T]: T[P] extends Function ? P : never;
     }[keyof T];

   type TransitionFunc<F> = F extends (action: Promise<infer T>) => Promise<Action<infer U>>? <T, U>(action: T) => Action<U>
  : F extends (action: Action<infer T>) => Action<infer U>
  ? <T,U>(action: T) => Action<U>
  : F;


type syncMethod<T, U> = (action: Action<T>) => Action<U>;
type asyncMethod<T, U> = (input: Promise<T>) => Promise<Action<U>>;


    type Connect2<T> =  {
        [P in keyof T]: T[P]  extends Function ?  P : never
    }[keyof T]

    type Connect<T> = {
        [P in PickFuncProp<T>]: TransitionFunc<T[P]>;
    }

    type Result = Connect<Module>;
    type Result2 = Connect2<Module>



    // fail
    type TestEqual1 = Equal<[], readonly [], "pass", "fail">;
    // pass
    type TestEqual2 = Equal<Array<string>, Array<number>, "pass", "fail">;


    type FuncReturnType<T extends (...args: any) => any> = T extends (
        ...args: any
      ) => infer R
        ? R
        : never;




        interface tmp2 {
            username: string;
            age: number;
           
        }


        let bar2: tmp2 = {
            username: 'Mark',
            age: 30
        }


        type  splitFunction<T extends object> = {
            [P in keyof T]?: T[P] extends Function ? T[P] : never
        }

        type tmp3 = {
            foo: string;
            bar: number;
            fun1: () => {};
            func2: () => {}
        }

        type Result3 = splitFunction<tmp3>

        type Equal<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;
        type MutableKeys<T extends object> = 
           { 
            [P in keyof T]?: Equal< { [Q in P]: T[P] },{ readonly [Q in P]: T[P] },P,never>  
          }[keyof T];

          interface IInterfaceWithReadonlyProps {
            readonly foo: string;
            bar: string;
            readonly func1: () => void;
            func2: () => void;
          }
          
          type Tmp<T extends object> = {
            [P in keyof T]-?: { [Q in P]: T[P] };
          };
          
          type A1 = Tmp<IInterfaceWithReadonlyProps>;


 type Result4 = [] extends object ? 1 : 2;
 type Result5 = (() => {}) extends object ? 1 : 2;
 type Result6 = {num: string} extends object ? 1 : 2;
 type Result7 = {bar: 'Mark'} extends object ? 1 : 2;
 type Result8 = string[] extends number[] ? 1 : 2;
 type Result9 = string extends String ? 1 : 2;
 type Result10 = string extends {} ? 1 : 2;
 type Result11 = {} extends Object ? 1 : 2;
 type Result12 = object extends Object ? 1 : 2;
 type Result13 = String extends object ? 1 : 2;
 type Result14 = string extends object ? 1 : 2;

   type Result15 = object extends {} ? 1 : 2;
   type Result16 = {} extends object ? 1 : 2;
   
   type Result17 = object extends Object ? 1 : 2;
   type Result18 = Object extends object ? 1 : 2;

   type Result19 = {} extends Object ? 1 : 2;
   type Result20 = Object extends {} ? 1 : 2;


   type Result21 =  Object extends any ? 1 : 2;
   type Result22 = object extends unknown ? 1 : 2;

   type Result23 = {} extends never ? 1 : 2;

   type Result24 = any extends object ? 1 : 2; 
   type Result25 = unknown extends object ? 1 : 2;

   type Result26 = never extends undefined ? 1 : 2;

   type Result34 = undefined extends 'linbudu' ? 1 : 2; // 2
type Result35 = null extends 'linbudu' ? 1 : 2; // 2
type Result36 = void extends 'linbudu' ? 1 : 2; // 2
 
type Result27 = any extends unknown ? 1 : 2;
type Result28 = unknown extends any ? 1 : 2;


 let mark1:string[] = ['1','2','3']
 let mark2:number[] = [1,2,3,4]
 


 function universeAdd<T extends string | number | boolean>(x:T,y:T){
    return x + (y as any)
 }

type  Func = (...args:any[]) => any

 type LiteralToPrimitive<T extends Func> = T extends (...args:any[]) => infer R ? R : never

type stringResult = LiteralToPrimitive<()=>number>

type Swap<T extends any[]> = T extends [infer A,...infer C, infer B] ? [B,...C,A] : T;

type SwapResult1 = Swap<[1,2]>
type SwapResult2 = Swap<[1,2,3]>



type ArrayItem<T extends any[]> = T extends Array<infer R> ? R : never;

type ArrayResult = ArrayItem<[string,number]>



type PropType<T,k extends keyof T> = T extends  { [key in k]: infer R} ? R :never;


interface UserInfo {
    name: string;
    age: number
}
type propResult = PropType<UserInfo,'name'|'age'>

interface Map2<T> {

    [key: string]: T;
  
  }
  
  let keys: keyof Map2<number>;//string
  
  let value:  Map2<number>['antzone'];//number


  type CompareUnion<T,U> =  [T] extends [U]? true : false;

  type compareResult = CompareUnion<1|2,1|2|3>
  type compareResult2 = CompareUnion<2|4,5|7>

  type IsNever<T> = [T] extends [never] ? true :false;
  type neverResult = IsNever<'123'>


  type IsAny<T> = 0 extends string & T ? true : false;

  type IsUnknown<T> = unknown extends T
  ? IsAny<T> extends true
    ? false
    : true
  : false;

   
  type anyResult = IsAny<1>
  type unknownResult = IsUnknown<string>


   type Tmp4 = 1 & any
   type Tmp5 = 2 & unknown
     
   type IsUnknown2<T> = IsNever<T> extends false ? T extends unknown ? IsAny<T> extends false ? 0 : 1: 2 : 3;
   type IsUnknown3<T> = IsAny<T> extends false ? T extends unknown ? 1 : 2 :3

   type Tmp6 = IsUnknown2<unknown>
   type Tmp7 = IsUnknown3<unknown>

    type IsUnknown4<T> = unknown extends T ? 1 : 2;
    type IsUnknown5<T> = T extends unknown ? 1 : 2;

    type Tmp8 = IsUnknown4<any>
    type Tmp9 = IsUnknown5<any>

     

    abstract class Father {
        abstract foo: string;
        abstract getInfo():void
    }

    class Son extends Father {
        foo = 'Mark';
        getInfo(){
            return this.foo
        }
    }

    let sonResult = new Son();
    let result5 = sonResult.getInfo();
    console.log(result5)

    //  abstract class Animal {
    // //所有动物都会吃
    //   abstract eat():void;
    // //所有动物都会飞
    //  fly(){};
    //  }

    //  class concreteAnimal extends Animal {
    //       eat(){}
    //       fly(){}
    //  }

    //  interface  Animal {
    //     eat(): void;
    //     fly(): void
    //  }
    //  class  concreteAnimal  implements  Animal {
    //     eat(){}
    //     fly() {}
    //  }


    type Partial2<T> = {
        [P in keyof T]?: T[P]
    }   

    type Required2<T> = {
        [P in keyof T]-?: T[P]
    }

    type Mutable<T> = {
       -readonly [P in keyof T]: T[P]
    }

    type Partial3<T> = {
        [P in keyof T]+?: T[P];
    };

    interface  obj2 {
        name:string | void;
        readonly age:number;
    }

    type obj3 = Partial2<obj2>
    type obj4 = Required2<obj2>
    // type obj5 = Required2<obj2>
    type obj6 = Partial3<obj2>
    type obj7 = Mutable<obj2>

    const foo4:obj2 = {
        name: undefined,
        age: 30
    }

    type Record2<K extends keyof any, T> = {
        [P in K]: T
    }

    type RecordR = Record2<string,unknown>
    type RecordR2 = Record2<string,any>

    let test1:RecordR2 = {
       'hello':123
    } 

    console.log(test1)

    type Dictionary<T> = {
        [index:string]: T
    }

    type DictResult1 = Dictionary<number>


    type Pick2<T, K extends keyof T> = {
        [P in K]: T[P]
    }

    // type Omit2<T, K extends keyof any> = Pick2<T,Exclude<keyof T,K>>


     interface Foo {
        name: string;
        age: number;
     }
    type PickFoo = Pick2<Foo,"age">

    type OmitFoo = Omit2<Foo,'age'>

//     type Omit1<T, K> = Pick<T, Exclude<keyof T, K>>;
// type Omit2<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Omit1<T, K> = Pick<T, Exclude<keyof T, K>>;
type Omit2<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// 这里就不能用严格 Omit 了
declare function combineSpread<T1, T2>(obj: T1, otherObj: T2, rest: Omit<T1, keyof T2>): void;

type Point3d = { x: number, y: number, z: number };

declare const p1: Point3d;

// 能够检测出错误，rest 中缺少了 y
//combineSpread(p1, { x: 10 }, { z: 2 });

type extractResult = Extract<1| 2|3,2|3>
type extractResult2 = Extract<2|3,1|2|3>
type excludeResult = Exclude<1|2|3,2|3>
type excludeResult2 = Exclude<1|2,1|2|3>

type Concurrence<A, B> = A | B;
type concurrenceResult = Concurrence<1,2>

//补集
type Difference<A, B> = A extends B ? never : A;
type Complement<A,B extends  A> = Difference<A,B>

 type complementResult = Complement<1|2|3,1|2>

 type CustomHandler = (name: string, age: number) => void;
 //const handler1: CustomHandler = (name, age) => true;
// const result1 = handler1('linbudu', 599); // void

    type fooFunc  = () => string; //
    type barFunc = () => '橘子汽水'
    type bazFunc = (input:string) => number
    
    class Animal {
        asPet() {}
      }
      
      class Dog extends Animal {
        bark() {}
      }
      
      class Corgi extends Dog {
        cute() {}
      }

      type DogFactory = (dog:Dog) => Dog
      type DogFactory2 = (dog:Dog) => Animal;
      type DogFactory3 = (dog:Dog) => Corgi;

      type DogFactory4 = (dog:Animal) => Animal;
      type DogFactory5 = (dog:Animal) => Corgi;
      type DogFactory6 = (dog:Animal) => Dog;

      type DogFactory7 = (dog:Corgi) => Animal;
      type DogFactory8 = (dog:Corgi) => Dog;
      type DogFactory9 = (dog:Corgi) => Corgi;

      function transformDogAndBrank(dogFactory:DogFactory){
        const dog1 = dogFactory(new Dog());
        dog1.bark()
      ;
      }


      import { expectType } from 'tsd';
         type PromiseValue<T> = T extends Promise<infer V> ? PromiseValue<V> :  T;

         type  DeepPartial<T extends object> =  {
           readonly [k in keyof T]?: T[k] extends object ? DeepPartial<T[k]> : T[k]
         }

         type DeepMutable<T extends object> = {
            -readonly [k in keyof T]?: T[k] extends object ? DeepMutable<T[k]> : T[k]
         }

         type DeepPartialStruct = DeepPartial<{
            foo: string,
            nested: {
                nestedFoo: string,
                nestedBar: {
                    nestedBarFoo: string
                }
            }
         }>
         
         type DeepMutableStruct2 = DeepMutable<{
            foo: string,
            nested: {
                nestedFoo: string,
                nestedBar: {
                    nestedBarFoo: string
                }
            }
         }>
           
         expectType<DeepMutableStruct2>({
             foo: 'Mark',
             nested: {
               
             }

         })
         expectType<DeepPartialStruct>({
            foo: 'Tina',
            nested: {
                nestedFoo: 'Mark', 
                nestedBar: {
                    nestedBarFoo: '橘子汽水'
                }
            }
         })
         expectType<DeepPartialStruct>({
            foo: 'Tina',
            nested: {
                nestedBar: {}
            }
         })


        //  type nonNullUndefined<T> = T extends null | undefined ? never : T;

        //  interface  nullObj {
        //     user:null,
        //     age: number,
        //     data: {
        //         dataUser: string,
        //         dataAge: number,
        //         info:undefined
        //     }
        //  }
         

        //  type DeepNonNull<T extends object> = {

        //     [k in keyof T]:T[k] extends object ? DeepNonNull<T[k]> : nonNullUndefined<T[k]>
        //  }
        // type nonNullStruct = DeepNonNull<nullObj>

        //  expectType<nonNullStruct>({
        //     user:null, 
        //     age:30,
        //     data: {
        //         dataUser:'Mark', 
        //         dataAge: 10,
        //         info:undefined
        //     }
        //  })
        type Flatten<T> = {[K in keyof T]: T[K]}
        type MarkPropAsOptional<T extends object, K extends keyof  T = keyof T> = Flatten<Partial<Pick<T,K>> & Omit<T, K>>

        function hanlder<T>(input:T){
            if(typeof input === 'number'){
                return input 
            }else{
                return 1
            }
        }

        const sbdNumber = hanlder(100)

        
        type  MarkPropAsOptionalStruct = MarkPropAsOptional<{
            foo: string,
            bar: string,
            baz: string
        }, 'baz'
        >

        expectType<MarkPropAsOptionalStruct>({
            foo: 'hello',
            bar: 'Type',
            baz: 'script'
        })

        



        // type FlattenResult = Flatten<{
        //     userName: string, age: number
        // }>

        // expectType<FlattenResult>({
        //     userName: 'Mark', age: 20
        // })