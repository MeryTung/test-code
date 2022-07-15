var Bar;
(function (Bar) {
    var Foo = /** @class */ (function () {
        function Foo() {
        }
        Foo.prototype.isActive = function (s) {
            return s;
        };
        return Foo;
    }());
    Bar.Foo = Foo;
})(Bar || (Bar = {}));
/// <reference path="Bar.ts" />
var myFoo = new Bar.Foo();
console.log(myFoo.isActive(false));
