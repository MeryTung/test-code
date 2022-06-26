//混合类型



//函数接口
// interface SumInterface {
//     (a:number, b:number):number;
// }

// let sum: SumInterface = function(x:number, y:number):number {
//     return x + y
// }

// console.log(sum(1,10))


interface SumInterface {
    (a:number, b:number):number;
    interval: number;
    reset(): void;
}

function sum():SumInterface{
    let fn = function(x:number, y:number){ return x + y;} as SumInterface;
    let sm = fn(1,2);
    console.log(sm)
    fn.interval = 10;
    fn.reset = function(){}
    return fn;

}

console.log(sum())