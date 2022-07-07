//接口继承类
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//extends继承某个类或接口，继承之后可以使用父级方法，也可以重写父级方法
//extends只能实现一个继承 class a extends b
//implements是类实现接口，接口的方法一般为空，必须要重写才能使用
//implements 可以实现多个接口   class a implements b,c,d
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //继承Control， state属性可写可不写
    //类实现接口SelectableControl,select()必须重写，否则报错
    Button.prototype.select = function () { };
    return Button;
}(Control));
var clickBtn = /** @class */ (function () {
    function clickBtn() {
    }
    clickBtn.prototype.select = function () { };
    return clickBtn;
}());
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.foo = function () { };
    return TextBox;
}(Control));
