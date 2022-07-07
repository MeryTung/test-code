//函数
// function add(x:number, y:number):number {
//     return x + y
// }
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.onClickBad = function (e) {
        // this.info = e.message;
        console.log('clicked!');
    };
    return Handler;
}());
var h = new Handler();
var uiElement = {
    addClickListener: function () { },
};
uiElement.addClickListener(h.onClickBad);
