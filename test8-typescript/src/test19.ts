//实用工具类型
//Partial //所有属性设置为可选的

// interface Todo {
//     title: string;
//     description: string;
// }

// function update(todo: Todo,fieldTodo:Partial<Todo>) {
//     return {...todo,...fieldTodo}
// }

// const todo1 = {
//     title: '标题1',  //如果这里少一参数,会提示缺少属性
//     description: ' 描述1'
// }

// const todo2 = {
//     title: '标题2',  
//     //这里为可选属性,Partial<Todo>类似下面写法
//    // {
//     //title?:string;
//     //description: string;
//    // } 
    
// }

// console.log(update(todo1,todo2))

//ReadOnly<Type> //所有属性设置为仅读的


// interface Todo {
//     readonly title: string;
// }

// const todo: Todo = {
//     title: '标题1'
// }

// //todo.title = '改为标题2'  //无法分配到"title"",因为它是只读属性

// //冻结对象
// function freeze<T>(obj:T):Readonly<T> {
         
//         return obj
// }

// console.log(freeze(todo))



// //Reacord //一个属性名为K,属性值为T.可以将某个类型属性映射到另一个类型上

// interface  PageInfo {
//         title: string
// }

// type Page = 'home' | 'about' | 'contact';

// //构造一个类型
// const x:Record<Page,PageInfo> = {
//       about: {title: 'about'},
//       home: {title: 'home'},
//       contact: {title: 'contact'}

// }


// console.log(x)
// {
//     about: { title: 'about' },
//     home: { title: 'home' },
//     contact: { title: 'contact' }
//   }
  

//Pick  从类型Type中选部分属性Keys来构造一个类型
//Omit  获取类型Type中所有属性,然后从中剔除Keys属性后构成一个类型

// interface  Todo {
//     title: string;
//     description: string;
//     completed:boolean;
// }


// type TodoPreview = Pick<Todo,'title' | 'completed'>
// type TodoPreview2 = Omit<Todo,'description'>

// let todo:TodoPreview = {
//     title: '标题1',
//     completed: true
// }

// let todo2: TodoPreview2 = {
//     title: '标题2',
//     completed: false
// }

// console.log(todo)

//Exclude  从类型Type中剔除所有可以赋值给ExcludedUnion属性,然后构成一个类型

// type t0 = Exclude<'a' | 'b' | 'c' | 'b','b'>  //这里ExcludedUnion属性,为b,
// type t1 = Exclude<string|number,string>

// let todo3:t0  = 'c'
// let todo4:t1 = 1
// console.log(todo3)
// console.log(todo4)

// //NonNullable
// //从类型Type中剔除null和 undefined ,然后构成一个类型

// type t2 = NonNullable<string | number | null | undefined>
// let todo5:t2 = null
// console.log(todo5)

// //Parameters<Type>
// //由函数类型Type的参数类型构造出一个元组类型

// type t3 = Parameters<() => string>
// type t4 = Parameters<(s:string) => void>
// type t5 = Parameters<(s:string,n:number) => void>
// type t6 = Parameters<<T>(arg:T) => T>
// type t7 = Parameters<any>
// type t8 = Parameters<never>
// type t9 = Parameters<string>  //类型string不满足约束(...args: any) => any 



// let todo6:t3 = []
// let todo7:t4 = ['string']
// let todo8:t5 = ['String',1]
// let todo9:t6 = ['hello']
// let todo10:t7 = ['any']
// let todo11:t8 


//constructorParameters
//由构造函数类型Type的参数类型构造出一个元组类型或数组类型

// type t0 = ConstructorParameters<ErrorConstructor>
// type t1 = ConstructorParameters<FunctionConstructor>
// type t2 = ConstructorParameters<RegExpConstructor>
// type t3 = ConstructorParameters<any>
// type t4 = ConstructorParameters<never>


// let todo:t0 = ["不好意思,错误"]   //返回[message?:string]类型
// let todo2:t1 = ['hello','world']   //返回string[]类型
// let todo3:t2 = ['/\d+/g','hello']   //返回[pattern:string,flag?: string]


//ReturnType返回类型,构造一个新类型 
// type t0 = ReturnType<()=>string>
// type t1 = ReturnType<(s:string)=> void>//void没有类型的,undefined,null,函数没有返回值,console.log('..')


// let todo0:t0 = 'hello';
// let todo1:t1 = null;


//InstanceType 构造函数类型Type实例来构造一个新类型
// class C {
//     x = 0; y = 0;
//     constructor(public s:string){};
//     foo(){
//         return this.s
//     }
// }
// type t0 = InstanceType<typeof C>
// type t1 = InstanceType<any>
// type t2 = InstanceType<never>
//type t3 = InstanceType<string>   //Error,类型"string"不满足约束'abstract new (...args:any) => any'
//type t4 = InstanceType<Function>  //类型""Function"不满足约束""abstract new (...args:any)=>any"


// let todo0:t0 = {
//     x:1,
//     y:2,
//     s: 'hello', 
//     foo:function(){return this.s}
// }


//Required 是类型Type的所有属性为required,为此相反的是Partial

// interface Props {
//     s?: string;
//     n?: number;
// }
// type t0 = Required<Props>

// let todo1:Props = {
//     s: 'hello'
// }

// let todo2:t0 = {
//     s:'hello',
//      n:1
// }


//ThisParameterType   提取this类型
// OmitThisParameter  剔除this类型

// function toHex(this:Number){
//         return this.toString(10)
// }

// function numberToString(n:ThisParameterType<typeof toHex>){
//     return toHex.apply(n)
// }


// console.log(numberToString(1))
// const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

// console.log(fiveToHex());



//ThisType  不会返回转换后类型,它做为上下文this类型的一个标记

    type ObjectDescript<D,M> = {
        data?: D;
        methods?: M & ThisType<D & M>
    }

    function  makeObject<D,M>(desc:ObjectDescript<D,M>): D & M {
            let data:object = desc.data || {}
            let methods: object = desc.methods || {}
            return {...data,...methods} as D & M
    }

    let obj = makeObject({
        data:{x:0,y:0},
        methods: {
            moveBy(dx:number,dy:number){
                this.x += dx
                this.y += dy
                return this.x + ' ' + this.y
            }
        }
    })

    obj.x = 10;
    obj.y = 10
    console.log(obj.moveBy(5,5))


