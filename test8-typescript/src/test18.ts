//映射类型进行推断

type Proxy<T>  = {
    get():T;
    set(value:T):void;
}


type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
}

function proxify<T>(t: T): Proxify<T> {
    let result = <Proxify<T>>{};
    for (const k in t) {
        result[k] = {  
            get: () => t[k],     
            set: (value) => t[k] = value
        }
    }
    return result;
}

function unProxiy<T>(t:Proxify<T>):T{
    let result = {} as  T;
    for(let k in t){
     result[k] = t[k].get();
    }
    return result

}



let  props = {room: 4}
let proxyProps = proxify(props)
let originalProps = unProxiy(proxyProps)
console.log(originalProps)