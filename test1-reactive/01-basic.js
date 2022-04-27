let price = 5;
let quantity = 2;
let total = 0;

let dep = new Set();

let effect = () => { total = price * quantity }

function track(){
     dep.add(effect);
}

function trigger(){
    dep.forEach(effect => { effect() })
}

track();
effect();
console.log(`total is ${total}`)
price = 20;
trigger();
console.log(`total is ${total}`)