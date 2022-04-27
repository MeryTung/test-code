let product = { price:5, quantity:2 }
let user = { fristName:'zhao', lastName:'you ting'}
let total = 0

let effect = () => { total = product.price * product.quantity}

let targetsMap = new WeakMap()

function track(target,key){
    let depsMap = targetsMap.get(target)  //获取product对象
    if(!depsMap){
        targetsMap.set(target,(depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if(!deps){
        depsMap.set(key,(deps = new Set()))
    }
    deps.add(effect)
}

function trigger(target,key){
    let depsMap = targetsMap.get(target)
    if(!depsMap){ return }
    let deps = depsMap.get(key)
    if(deps){
        deps.forEach(effect => { effect() })
    }
    
}

track(product,'quantity')
effect()
console.log(total)
product.quantity = 20;

trigger(product,'quantity')
console.log(total)

