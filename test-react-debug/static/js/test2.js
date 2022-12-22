// const obj = {text: 'hello vue3'}

// function effect(){
//     document.body.innerText = obj.text
// }

let activeEffect
function effect(fn){
    const effectFn = () => {
        cleanup(effectFn)
        activeEffect = effectFn
        fn()
    }
    
    effectFn.deps = [];
    effectFn()
}
// effect()

function cleanup(effectFn){
    for(let i = 0; i<effectFn.deps.length; i++){
        const deps = effectFn.deps[i];
        deps.delete(effectFn)
    }
    effectFn.deps.length = 0
}

let bucket = new WeakMap()

const data = {ok:true,text: "hello world"}


const obj = new Proxy(data,{
    get(target,key){
        track(target,key)
        return target[key]
    },
    set(target,key,newVal){
        target[key] = newVal;
        trigger(target,key)
    }
})

function track(target,key){
    if(!activeEffect) return target[key]
    let depsMap = bucket.get(target)
    if(!depsMap){
        bucket.set(target,(depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if(!deps){
        depsMap.set(key,(deps= new Set()))
    }
    deps.add(activeEffect)
    activeEffect.deps.push(deps)
}

function trigger(target,key){
    const depsMap = bucket.get(target);
        if(!depsMap) return
        const effects = depsMap.get(key)

        const  effectsToRun = new Set(effects)
        effectsToRun.forEach(effectFn=> effectFn)
       // effects && effects.forEach(fn=>fn())
}


// effect(function effectFn1(){ document.body.innerText = obj.ok ? obj.text : 'not'})
effect(function effectFn1(){
    effect(function effectFn2(){
        
    })
})


// setTimeout(function(){
//     obj.text = 'hello vue3'
// },5000)