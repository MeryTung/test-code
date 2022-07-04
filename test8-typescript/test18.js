//映射类型进行推断
function unProxiy(t) {
    var result = {};
    for (var k in t) {
        result[k] = t[k].get();
    }
    return result;
}
function proxify(t) {
    var result = {};
    var _loop_1 = function (k) {
        // result[k] 和 t[k] 都可以工作，因为 k 是 T 和 Proxify<T> 的键，但是 result['random'] 将是无效的
        result[k] = {
            // get 的返回必须是 T[Extract<keyof T, string>] 所以 ()=> 0 将是一个错误
            get: function () { return t[k]; },
            // value 和 t[k] 必须是 T[Extract<keyof T, string>] 所以 t[k] = '' 也是一个错误
            set: function (value) { return t[k] = value; }
        };
    };
    for (var k in t) {
        _loop_1(k);
    }
    return result;
}
var props = { room: 4 };
var proxyProps = proxify(props);
var originalProps = unProxiy(proxyProps);
console.log(originalProps);
