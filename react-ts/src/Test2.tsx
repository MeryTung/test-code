// 源码
export const handler = () => { };

// UMD 编译结果
(function (global, factory) {
    // 尝试使用 CommonJs
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    // 尝试使用 AMD
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
    // 兜底，使用全局变量挂载
    else {
      (global = global || self, global.handle = factory());
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.handler = void 0;
    const handler = () => { };
    exports.handler = handler;
});