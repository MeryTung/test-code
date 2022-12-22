// 副作用函数调用栈
let effectStack = [];
let activeEffect = null;
function effect (fn,options = {}){
    const effectFn = () => {
        cleanup(effectFn)
        activeEffect = effectFn
        effectStack.push(effectFn)
        const res =  fn()
        effectStack.pop()
        activeEffect = effectStack[effectStack.length - 1]
        return res
    }
    effectFn.options = options;
    effectFn.deps = []
    if(!options.lazy){
        effectFn()
    }
  
    return effectFn
}


function computed(getter){
    let dirty = true
    let value;
    const effectFn = effect(getter,{
        lazy: true,
        scheduler(){
            dirty = true
        }
    })
    const obj = {
        get value(){
            if(dirty){
            value = effectFn()
            dirty = false
            }
            return value
        }   
    }
    return obj
}



const data = {foo:1,bar:2};
const obj = new Proxy(data,{});
const sumRes = computed(()=> obj.foo + obj.bar)
console.log(sumRes.value)
console.log(sumRes.value)


function cleanup(effectFn) {
    // 从副作用函数关联的依赖集合中删除副作用函数，从而断开关联
    for (const deps of effectFn.deps) {
      deps.delete(effectFn);
    }
    // 重置effectFn.deps
    effectFn.deps.length = 0;
  }

// const obj = {
//     foo: 123,
//     bar: 456
// }
// const effectFn = effect(()=>{
//     console.log(obj.foo)
// },{
//     lazy:true
// })

// const effectFn = effect(() => obj.foo + obj.bar,{lazy:true})
// let  val1= effectFn()
// console.log(val1)