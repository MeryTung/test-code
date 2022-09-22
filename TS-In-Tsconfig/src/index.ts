
// class Person{

//     //静态属性和构造函数不参与比较，if两个具有相同的实例，那么就可以双向协变
//     //age:number;
//     constructor(name: string){}

// }
// class Student extends Person {
//     //age:number;
//     constructor(name:string, age:number = 1){
//         super(name)
//     }
// }
// let obj1:Student = new Person('圆圆')
// let  obj2: Person = new Student('Mark',30);

// enum EventType {
//     Mouse,
//     Keyboard
// }

// interface Event {
//     timestamp: number;
// }


// interface MouseEvent extends Event {
//     x1:number;
//     y1:number
// }

// interface Keyboard extends Event {
//     keyCode1:number
// }

// function listenEvent(eventType: EventType,handler:(n:Event) => void){

// }

// listenEvent(EventType.Mouse,(e:MouseEvent) => console.log(e.x + e.y));
// listenEvent(EventType.Mouse,(e:Event)=>console.log(e as MouseEvent));
// listenEvent(EventType.Mouse,(e:MouseEvent)=> {console.log(e.x + "," + e.y)) as (e: Event)});   //不能逆协同
// listenEvent(EventType.Keyboard,(e:Keyboard) =>console.log(e.keyCode1));


// let a = [1,2,3,4];
// let bor = [1,...a];
// let c ="hello"


//  c = null
// const hello: string = "Hello TypeScript";
// document.querySelector('.app')[0].innerHTML = hello;

//console.log([1,2,[3,4]].flat())


// function add(x: number, y: number){
//     return x + y
// }

// add.call(undefined,1,'hello')
// class Foo {
//     age:number;
//     getAge(){
//         return function(){
//             console.log(this.age)
//         }
//     }
// }


// let foo1 = new Foo().getAge();
// foo1();、

// function baz(x: number, y: number){   
//     let g = 10;   //已声明”g“，但从未读取其值
//     return x
// }

// baz(1,2)
// function baz(a){
//     switch(a){
//         case 1:
//             console.log(a);
//             break;
//         case 2:
//             console.log(a);
//             break;
     
//         default:
//             console.log('OK');
//             break
          
//     }
// }

// baz(1)

function baz(a){
if(a==1){
  console.log(1)
}else if(a==2){
    console.log(2)
}
}

baz(1)




