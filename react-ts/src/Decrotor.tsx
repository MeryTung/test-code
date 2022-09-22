
import React from 'react'

@Dec()
class Foo {
  a = 1
}
function Dec():ClassDecorator{  
  return (target: any)=> {
    target.prototype.newInstanceMethod = () => {
      console.log('typescript 装饰器方法')
    }
    target.newStaticMethod = () => {
      console.log('typescript 装饰器静态方法')
    }
  }
}



const foo1: any = new Foo()
console.log(foo1.newInstanceProperty);
console.log((<any>Foo).newStaticProperty);