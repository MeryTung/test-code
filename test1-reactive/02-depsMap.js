let product = { price: 5, quantity: 2}
let total = 0

 let effect = () => { total = product.price * product.quantity }

 let depsMap = new Map()

 function track(key){
    let dep = depsMap.get(key)
    if(!dep){
        depsMap.set(key,(dep = new Set()))
    }
    dep.add(effect)
 }

 function trigger(key){
    let dep = depsMap.get(key)
    dep.forEach(effect => { effect()})
 }


 track('quantity')
 effect()
 console.log(total)

 product.quantity = 20
 trigger('quantity')
 console.log(total)

