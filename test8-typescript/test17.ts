//映射类型
//从旧类型中创建新类型的一种方式

interface PersonPartial  {
    name?: string;
    age?: number;
}

interface PersonReadOnly {
    readonly name: string;
    readonly age: number;
}


type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]
}

type Partial2<T> = {
    [P in keyof T]?: T[P];
}

//像下面这么使用
// type PersonPartial = Partial2<Person>

//可以使用交叉类型
type Partial3<T> = {
    [P in keyof T]?: T[P];
    //newMember: boolean;   //error,映射的类型可能不能声明属性或方法
}&{newMember: boolean; }


type Keys = 'options1' | 'options2'
type Flags = { 
    [K in keyof Keys]:boolean
}

type Proxy<T> = {
    get():T;
    set(value:T):void
}

type Proxify<T> = {
    [P in keyof T ] :Proxy<T[P]>
}

function proxify<T>(t: T): Proxify<T> {
    let result = <Proxify<T>>{};
    for (const k in t) { // k 是 Extract<keyof T, string> 类型，所以它必须是 T 的键
        // result[k] 和 t[k] 都可以工作，因为 k 是 T 和 Proxify<T> 的键，但是 result['random'] 将是无效的
        result[k] = { // get/set 字段被检查，所以 _get 将是一个错误
            // get 的返回必须是 T[Extract<keyof T, string>] 所以 ()=> 0 将是一个错误
            get: () => t[k],
            // value 和 t[k] 必须是 T[Extract<keyof T, string>] 所以 t[k] = '' 也是一个错误
            set: (value) => t[k] = value
        }
    }
    return result;
}
// function proxify<T extends object>(o: T): Proxify<T> {
//     const result = {} as Proxify<T>;
//     for (let key in o) {
//         let rawValue = o[key];
//         result[key] = {
//             get: () => rawValue,



//             set: (value) => {
//                 rawValue = value;
//             },
//         };
//     }
//     return result;
// }
let props = { rooms: 4 };

let proxyProps = proxify(props)
console.log(proxyProps.rooms.get())