// let user = {
//     firstName: 'Zhao',
//     lastName: 'YouTing',
//     get fullName(){
//         return this.firstName + ' ' + this.lastName
//     },
//     set fullName(value){
//      [this.firstName,this.lastName] = value.split(' ')
//     }
// }

// console.log(`Name is ${user.fullName}`)
// user.fullName = '赵 又廷'
// console.log(`Name is ${user.fullName}`)
let targetMap = new WeakMap();
let activeEffect = null

function track(target,key){
    if(activeEffect){
        let depsMap = targetMap.get(target);
        if(!depsMap){
            targetMap.set(target,(depsMap = new Map()))
        }
        let dep = depsMap.get(key);
        if(!dep){
            depsMap.set(key,(dep = new Set()))
        }
        dep.add(activeEffect);
    }
    
}
function trigger(target,key){
    let depsMap = targetMap.get(target);
    if(!depsMap){ return }
    let dep = depsMap.get(key);
    if(dep){
        dep.forEach(effect => { effect() })
    }
    
}

function ref(raw){
    let r =  {
        get value(){
            track(r,'value')
            return raw
        },
        set value(newVal){
            raw = newVal
            trigger(r,'value')
        }
    }
    return r
}
function effect(eff){
    activeEffect = eff
    activeEffect()
    activeEffect = null
}

let total = 0;
let product = reactive( { price:5, quantity:2 })
let salePrice = ref(0);
effect( () => { salePrice.value = product.price * 0.4 })    //
effect( () => { total = salePrice.value * product.quantity } ) 

function reactive(target){
    let handler = {
        get(target,key,receiver){
            let result = Reflect.get(target,key,receiver)
            track(target,key)
            return  result
        },
        set(target,key,value,receiver){
            let oldValue = target[key]
            let result =  Reflect.set(target,key,value,receiver)
            if(oldValue !==value){
                trigger(target,key)
            }
            
            return result
        }
    }
    return new Proxy(target,handler)

}

console.log(total,salePrice.value);
product.quantity = 20
console.log(total)
product.price = 20

console.log('salePrice',salePrice.value)