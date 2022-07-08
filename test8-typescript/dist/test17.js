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
var props = { rooms: 4 };
var proxyProps = proxify(props);
console.log(proxyProps.rooms.get());
