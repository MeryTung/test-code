"use strict";
//导入
// import  { ZipCodeValidator } from './ZipCodeValidator'
// let myValidator = new ZipCodeValidator();
//重命名
// import  { ZipCodeValidator as  ZCV } from './ZipCodeValidator'
// let myValidator = new ZCV();
// myValidator.isAcceptable('12354')
exports.__esModule = true;
//将模块导入到一个变量
// import * as validator from  './ZipCodeValidator';
// let myValidator = new validator.ZipCodeValidator();
// myValidator.isAcceptable('1234')
//具有副作用的导入模块，全局变量容易造成污染
//默认导出
// export default function(){
//     return true;
// }
//export default class Bar {   //一个模块都只能有一个默认导出，不然回报错。
//}
//导入default 类
// import ZipCodeValidator from './module/ZipCodeValidator';
// let myValidator =new ZipCodeValidator();
// console.log(myValidator.isAcceptable('12345'))
//导入函数 default
// import validator from './module/StaticZipCodeValidator';
// let  strings = ['hello','586952','20'];
// strings.forEach(s => {
//     console.log(`"${s}"--${validator(s)?"matches":"does not matches"}`)
// })
//导入一个default的值
// import num from './module/OneTwoThree';
// console.log(num)
//typescript  export  = 和 import  = require('typescript');
// import Zip= require('./requirets/ZipCodeValidator')
// let myValidator = new Zip();
// console.log(myValidator.isAcceptable('12346'))
// let strings = ['hello','12345','20'];
// strings.forEach(s => {
//     console.log(`${s}--${myValidator.isAcceptable(s)}?"match":"does not match"`)
// })
// import m  = require('./requirets/mod');
// export let t = m.something + 1
// console.log(t)
//用AMD形式
exports["default"] = '123';
