//声明合并
// interface Box {
//     height: number;
//     width: number;
// }

// interface Box {
//     scale: number;
//    // height: string //后续属性声明必须属于同一类型，不然会报错
// }

// let boxz:Box = {height: 0, width: 0, scale: 10}

// interface Document2 {
//     createElement(tagName:any):Element;
// }
// interface  Document2{
//      createElement(tagName:'div'): HTMLDivElement;
// }
// interface Document2 {
//     createElement(tagName:'span'): HTMLSpanElement;
// }
// interface Document2 {
//     createElement(tagName: string): HTMLElement;
//     createElement(tagName: 'canvas'): HTMLCanvasElement;
// }


// namespace A {
//     let used = true;
//     export function fn(){
//         return used
//     }
// }

// namespace A {
//     export function fn2(){
//         return used //找不到名称used
//     }
//     //export function fn(){}  //函数实现重复
// }

// class A{
//     label:A.B
// }

// namespace A {
//     export class B {

//     }
// }

