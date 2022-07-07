//枚举
//数字枚举
//  enum Direction  {
//         Up = 1,
//         Down,
//         Left,
//         Right
//  }
//  console.log(Direction.Down)
//  enum E {
//     D,
//     A = getSomeValue(20),   //枚举成员必须具有初始化表达式，第一个枚举参数不能用函数获取值,只能放在初始化的束纸枚举之后
//     B = 10
//  }
//  function getSomeValue(n: number): number {
//     return n
//  }
//   console.log(E.A)
//   console.log(E.D)
//字符串枚举
//每个成员必须是字符串，或另一个枚举型字符串成员进行初始化
//它不像数字枚举类型，没有自增长
var title = 'Left';
var BooleanLikeogeneousEnum;
(function (BooleanLikeogeneousEnum) {
    BooleanLikeogeneousEnum["Up"] = "Up";
    BooleanLikeogeneousEnum["Dowm"] = "Dowm";
    BooleanLikeogeneousEnum["Left"] = "Left";
    //Left = title,   //含字符串值成员的枚举中不预序使用计算值
    //Left = UserName.Title,   //含字符串值成员的枚举中不预序使用计算值
    BooleanLikeogeneousEnum["Right"] = "Right";
})(BooleanLikeogeneousEnum || (BooleanLikeogeneousEnum = {}));
console.log(BooleanLikeogeneousEnum.Left);
