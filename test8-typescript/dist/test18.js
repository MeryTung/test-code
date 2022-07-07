//映射类型进行推断
function proxify(t) {
    var result = {};
    var _loop_1 = function (k) {
        result[k] = {
            get: function () { return t[k]; },
            set: function (value) { return t[k] = value; }
        };
    };
    for (var k in t) {
        _loop_1(k);
    }
    return result;
}
function unProxiy(t) {
    var result = {};
    for (var k in t) {
        result[k] = t[k].get();
    }
    return result;
}
var props = { room: 4 };
var proxyProps = proxify(props);
var originalProps = unProxiy(proxyProps);
console.log(originalProps);
