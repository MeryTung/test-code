//类类型
//实现接口
var Clock = /** @class */ (function () {
    function Clock(id, stuName, stuAge) {
        this.id = id;
        this.stuName = stuName;
        this.stuAge = stuAge;
    }
    Clock.prototype.go = function () {
    };
    return Clock;
}());
var xiaoming = new Clock(1, 'xiaoming,', 20);
console.log(xiaoming);
