"use strict";

var _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyTestableClass = testable(_class = /*#__PURE__*/_createClass(function MyTestableClass() {
  _classCallCheck(this, MyTestableClass);
})) || _class;

function testable(target) {
  target.istrueAlias = true;
  target.prototype.isFalseAlias = false;
}

var baz = new MyTestableClass();
console.log(baz.isFalseAlias);
console.log(MyTestableClass.istrueAlias);
var Person = (_class2 = /*#__PURE__*/function () {
  function Person(f, s) {
    _classCallCheck(this, Person);

    this.first = f;
    this.last = s;
  }

  _createClass(Person, [{
    key: "name",
    value: function name() {
      return "".concat(this.first, " ").concat(this.last);
    }
  }]);

  return Person;
}(), (_applyDecoratedDescriptor(_class2.prototype, "name", [readonly], Object.getOwnPropertyDescriptor(_class2.prototype, "name"), _class2.prototype)), _class2);

function readonly(target, name, descriptor) {
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
} //readonly(Person.prototype, 'name', descriptor);
//target：类的原型对象
//name所要装饰的属性名
//descriptor该属性描述对象
// 类似于
//Object.defineProperty(Person.prototype, 'name', descriptor);


var myperson = new Person('1', '2');
console.log(myperson.name());