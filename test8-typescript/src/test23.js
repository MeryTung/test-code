// type Bar = {
//     userName: string,
//     age?: number
// }
// let baz;
// let foo = baz as Bar
// foo = {
//     userName:'Yuanyuan',
//     age:30
// }
// console.log(foo)
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
function fatherMixins(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.displayFatherName = function () {
            return this.fatherName;
        };
        return class_1;
    }(base));
}
function motherMixins(base) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_2.prototype.displayMotherName = function () {
            return this.motherName;
        };
        return class_2;
    }(base));
}
var Father = /** @class */ (function () {
    function Father(_fatherName) {
        this.fatherName = _fatherName;
    }
    Father.prototype.displayFatherName = function () {
        return this.fatherName;
    };
    return Father;
}());
var Mother = /** @class */ (function () {
    function Mother(_motherName) {
        this.motherName = _motherName;
    }
    Mother.prototype.displayMotherName = function () {
        return this.motherName;
    };
    return Mother;
}());
var MixinFatherMother = fatherMixins(motherMixins(/** @class */ (function () {
    function class_3() {
    }
    return class_3;
}())));
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(fatherName, motherName, childName) {
        var _this = _super.call(this) || this;
        _this._childName = childName;
        _this.fatherName = fatherName;
        return _this;
    }
    Child.prototype.displayMName = function () {
        return _super.prototype.motherName;
    };
    Child.prototype.displayFname = function () {
        return _super.prototype.fatherName;
    };
    Child.prototype.displayChild = function () {
        return this._childName;
    };
    return Child;
}(MixinFatherMother));
var o = new Child('Mark', 'Yuan', 'Merrey');
console.log(o.displayFname());
console.log(o.displayMname());
console.log(o.displayChild());
//class Child extends Father,Mother { }  //这样写会报错，类只能扩展一个类
