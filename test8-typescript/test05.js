//混合类型
function sum() {
    var fn = function (x, y) { return x + y; };
    var sm = fn(1, 2);
    console.log(sm);
    fn.interval = 10;
    fn.reset = function () { };
    return fn;
}
console.log(sum());
