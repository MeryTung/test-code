//类型保护


interface Bird {
    fly:boolean;
    sing:()=> any
}

interface Dog {
    fly:boolean;
    bark: () => any;
}


//类型断言as <>
function trainAnimal(animal: Bird | Dog) {
    if(animal as Bird){
        (animal as Bird).sing();
    }else{
        (animal as Dog).bark()
    }
}


//用in方法
function trainAnimalSecond(animal: Bird | Dog) {
     if('sing' in animal){
        animal.sing();
     }else{
        animal.bark();
     }
     
}

//typeof trainAnimal
function numberFunc(a1:number|string,b1:number|string){
    if(typeof a1 === 'string' || typeof b1 ==='string'){
        return `${a1}${b1}`
    }
    return a1 + b1
}


//instanceof

class Foo {
    baz(){}
}

function myClassFoo(c:Foo){
    if(c instanceof Foo){
        c.baz()
    }
}