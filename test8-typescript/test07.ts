//函数
// function add(x:number, y:number):number {
//     return x + y
// }

// let myAdd = function (x:number, y:number):number {
//     return x + y
// }


// console.log(add(1,2))
// console.log(myAdd(1,3))

//书写完整的函数类型
//1。参数类型(x:number, y:number)，每个参数指定一个名字和类型。 
//2. 返回值类型，我们在函数返回类型之前 使用=> ,,如果没有返回类型，必须指定类型为void而不能为空
// let myAdd:(x:number, y:number) => (void) = function(x:number, y:number) {
//     return x + y
// }



//推断类型
//typescript可正确识别类型、
//这叫按上下文归类，是类型推导的一种。它帮助我们更好地为程序指定类型

// let myAdd = function (x:number, y:number):number {
//     return x + y
// }

// console.log(myAdd(1,3))


//可选参数和默认参数

//可选参数
// function fullName(firstName: string, lastName?: string){
//     if(lastName){
//         return firstName + lastName
//     }
//    return firstName
// }

// console.log(fullName('Mark'))
//默认参数
// function fullName(firstName: string, lastName = 'Chao'){
//     if(lastName){
//         return firstName + ' ' + lastName
//     }
//    return firstName
// }

// console.log(fullName('Mark'))

// function fullName(firstName = 'Mark', lastName ?: string){
//     if(lastName){
//         return firstName + ' ' + lastName
//     }
//    return firstName
// }

// console.log(fullName('you ting','Chao'))

//剩余参数
//..。剩余参数定义在最后

// function fullName(firstName: string,...restOfName: string[]) {
//         return firstName + ' ' + restOfName.join(' ')
// }

// let employees = fullName('Mark','Chao','Jay','Tinly','Jane')
// console.log(employees)

//this
// interface Card {

// }
// interface Deck {
//     userName: string,
//     createCardPicker(this:Deck): ()  => Card
// }
// let userName = '圆圆';
// let desk:Deck = {
//     userName:'Mark',
//     createCardPicker:function(){
//         return () =>{
//             this.userName = userName
//             return userName
//         }
// }
// console.log(desk)

// class Rectangle {
//     private w: number;
//     private h: number;
  
//     constructor(w: number, h: number) {
//       this.w = w;
//       this.h = h;
//     }
  
//     getArea() {
//       return () => {
//         return this.w * this.h;
//       };
//     }
//   }

//   let rectangle = new Rectangle(20,30)
//   console.log(rectangle)
//   console.log(rectangle.getArea()())
// interface Card {
//     suit: string;
//     card: number
// }

// interface Deck {
//     suits: string[]; //
//     cards: number[]; 
//     createCardPicker(this: Deck):()=> Card
// }

// let deck: Deck = {
//     suits:['apple','banana','origin','hearts'],
//     cards: Array(52),
//     createCardPicker:function(this:Deck){
//         return () =>{
//             let pickedCard = Math.floor(Math.random() * 52)
//             let pickSuit = Math.floor(pickedCard / 13)
//             return {suit: this.suits[pickSuit],card: pickedCard % 13}
//         }
//     }
// }

// let  cardPicker = deck.createCardPicker()
// let pickedCard = cardPicker()
// console.log(pickedCard)

// interface Thrid {
//     result: string
// }

// interface  Message {
//     str: string;
//     bar(this:Message):()=> Thrid;
// }

// let message: Message = {
//     str: 'Hello',
//     bar:function(this:Message){
//         return () => {
//            return  {result:this.str}
//         }
//     }
// }

// let msg = message.bar()
// console.log(msg())
//普通函数
// interface Foo {
//     name: string;
//     bar(this:Foo):() => string
// }

// let obj = {
//     name: 'Hello',
//     bar(){
//     return this.name
// }
// }
// const str = 'hello world'
// console.log(obj.bar())


// const obj = {
//     name: "yj",
//     getName() {
//       return this.name
//     },
//   }
//   const fn1 = obj.getName
//    console.log(fn1())


//稍等
// interface  People {
//     name: string;
//     getName(): string
// }

// interface  PeopelConstructor {
//     new (name: string): People;
//     property: People
// }

// const ctor = function()

interface UIElement {
    addClickListener(onClick: (this:void,e: Event) => void):void
}

class Handler {
    info: string;
    onClickBad(this:void, e:Event){
        // this.info = e.message;
        console.log('clicked!');
    }
}

let  h = new Handler();
const uiElement: UIElement = {
    addClickListener: () => {},
  };
uiElement.addClickListener(h.onClickBad)