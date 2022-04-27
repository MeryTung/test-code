let targetMap = new WeakMap();

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
let activeEffect = null
function effect(eff){
    activeEffect = eff
    activeEffect()
    activeEffect = null
}

let total = 0;
let product = reactive( { price:5, quantity:2 })
let salePrice = 0;
effect( () => { total = salePrice * product.quantity } ) 
effect( () => { salePrice = product.price * 0.4 })
function reactive(target){
    let handler = {
        get(target,key,receiver){
            let result = Reflect.get(target,key,receiver)
            track(target,key)
            return  result
        },
        set(target,key,value,receiver){
            let result =  Reflect.set(target,key,value,receiver)
            trigger(target,key)
            return result
        }
    }
    return new Proxy(target,handler)

}


// effect()
console.log(total,salePrice);
product.quantity = 20
console.log(total)
product.price = 20

console.log('salePrice',salePrice)