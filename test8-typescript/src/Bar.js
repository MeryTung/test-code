var Bar;
(function (Bar) {
    class Foo {
        isActive(s) {
            return s;
        }
    }
    Bar.Foo = Foo;
})(Bar || (Bar = {}));
