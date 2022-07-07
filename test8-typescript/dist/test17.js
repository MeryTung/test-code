//映射类型
//从旧类型中创建新类型的一种方式
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
// function proxify<T extends object>(o: T): Proxify<T> {
//     const result = {} as Proxify<T>;
//     for (let key in o) {
//         let rawValue = o[key];
//         result[key] = {
//             get: () => rawValue,
//             set: (value) => {
//                 rawValue = value;
//             },
//         };
//     }
//     return result;
// }
var props = { rooms: 4 };
var proxyProps = proxify(props);
console.log(proxyProps.rooms.get());
