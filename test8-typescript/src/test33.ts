
import 'reflect-metadata'
// class MyTestClass {
//     hello():string{
//         return 'This is hello'
//     }
// }


// const mytest1 = Reflect.construct(MyTestClass,[]);
// const hello = Reflect.get(mytest1,'hello')

// console.log(Reflect.apply(hello,mytest1,[]))


function fn1(str: string | null) {
    console.log("求值装饰器：", str);
    return function (target:any,propertyKey:string,propertyDescriptor:any) {
      console.log("应用装饰器：", str);
    }
  }
  
  const   decorator1: MethodDecorator = () => {
    console.log("应用其他装饰器");
  }
  d
  class Mytestable {
    @fn1("hello 外层")
    @decorator1
    @fn1("hello 内层")
    method() {
        console.log('方法装饰器')
    }
  }

  const myable = new Mytestable()

  myable.method()

@sealed
  class Employee {
        greeting:string;
        constructor(msg:string) {
            this.greeting = msg
        }
  }

  function sealed(construct:Function){
        Object.seal(construct)   
        Object.seal(construct.prototype)
  }

  console.log(new Employee('hello ts'))