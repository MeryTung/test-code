@AddProperty('linbudu')
@AddMethod()
class MyFooableClass {
  a = 1;
}

function AddMethod(): ClassDecorator {
  return (target: any) => {
    target.prototype.newInstanceMethod = () => {
      return "Let's add a new instance method!";
    };
    target.newStaticMethod = () => {
     return "Let's add a new static method!";
    };
  };
}

function AddProperty(value: string): ClassDecorator {
  return (target: any) => {
    target.prototype.newInstanceProperty = value;
    target.newStaticProperty = `static ${value}`;
  };
}

function MyFoo(): ClassDecorator {
    return (target: any)=> {
        target.isTestable = true
    }

}

@MyFoo()
class MyBar {

}

@sealed
class Greeter {
    greeting: string;
    constructor(message:string){
        this.greeting = message
    }
    greet(){
        return ' Hello, ' + this.greeting
    }
}

function sealed(Constructor: Function){
    Object.seal(Constructor)
    Object.seal(Constructor.prototype)
}


const MyGreeter = new Greeter('chen si cheng shi shuai ge')

console.log(MyGreeter.greeting)
console.log(MyGreeter.greet())


//重载构造函数
function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
        return class extends constructor {
            newProperty = ' new Property'
            hello = 'override'
        }
}


@classDecorator
class Greeter2 {
    prototype = ' prototype';
    hello: string;
    constructor(m: string){
        this.hello = m
    }

}

console.log(new Greeter2('world'))

function OverrideBar(tagert:any):any  {
    return  class extends tagert {
        print(){
            console.log('This is Decorators')
        }
        overridePrint(){
            console.log('This is Override Bar')
        }
    }
}

@OverrideBar
class MyBar2 {
    print(){
        console.log('This is Bar')
    }
}

(new MyBar2()).print()
const myBar2 = <any>new MyBar2()
myBar2.overridePrint()

// const myFooableClass:any = new MyFooableClass();
// console.log(myFooableClass.newInstanceMethod())
// console.log(myFooableClass.newInstanceProperty)
// console.log((<any>MyFooableClass).newStaticMethod())
// console.log((<any>MyFooableClass).newStaticProperty)
// console.log((<any>MyBar).isTestable)


class MyBar3 {
    greeting: string
    constructor(message: string){
        this.greeting = message
    }
    @enumerable(false)
    greet(@addName() name:string){
        return 'Hello ,' + this.greeting + name
    }
}

function enumerable(value:boolean){
    return function(target:any,name:string,descriptor:PropertyDescriptor){
        descriptor.writable = value;
    }
}


function addName(){
    return (target,propertyKey,propertyIndex)=>{
            console.log(target.name)
    }
}

const mybar3 = new MyBar3('思成');
mybar3.greeting = 'sicheng';
mybar3.greet = function(){ return 'hello'}

console.log(mybar3.greet('sicheng'))



class Foo3 {
@ComputedProfile()
async fetch() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('RES'),3000)
    })
}
}

function ComputedProfile(): MethodDecorator {
    const start = new Date();
    return (target:any,propertyKey:any,descriptor:PropertyDescriptor)=>{
            propertyKey = descriptor.value!;
            descriptor.value = async function(...args:unknown[]){
                const res = await propertyKey.apply(this,args)
                const end =  new Date();
                console.log(`${String(propertyKey)} Time: end: ${end.getTime()} - ${start.getDate()}`)
                return res
            }
          
    }
}

const myFoo3:any = new Foo3();
(async()=>{
    console.log(await  myFoo3.fetch())
})


class Point4 {
    private  _x: number;
    private _y: number;
    @ModifyUsername()
    userName: string;
    constructor(x:number, y:number){
        this._x = x;
        this._y = y
    }
    @configurable(true)
    set x(value){
        this._x = value
    }
    get x(){
        return this._x
    }
}

function ModifyUsername(){
    return (target,propertyKey)=>{
        target[propertyKey] =  'sicheng'
        target['age'] = 10
    }
}

function configurable(value:boolean){
    return (target:any,propertyKey:string,descriptor:PropertyDescriptor)=>{
        const originalSetter = descriptor.set;
        descriptor.set  = function(newValue: number){
            originalSetter.call(this,newValue);
        }
    }
}

const myPoint4 = new Point4(1,2);
myPoint4.x = 10
console.log( myPoint4.x)
console.log(myPoint4.userName)