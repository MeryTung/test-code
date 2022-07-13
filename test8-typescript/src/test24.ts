
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

// declare namespace JSX {
//     interface IntrinsicElements {
//        // foo:any
//        [elemName: string]: any;
//     }
// }

// <foo/>
// <bar/>
//<bar/>  //error,JSX表达式必须具有一个父元素,它没在JSX.IntrinsicElements里指定



// class Disposable {
//     isDisposed:boolean = false;
//     dispose(){
//         this.isDisposed = true;
//     }
// }

// class Activatable {
//     isActive:boolean = true;
//     activate(){
//         this.isActive = true;
//     }
//     deativate(){
//         this.isActive = false;
//     }
// }

// class SmartObject {
//     constructor(){
//         setTimeout(()=>console.log(this.isDisposed+" " + this.isActive),500)
//     }
//     isteract(){
//         this.activate()
//     }
// }

// interface SmartObject extends Disposable, Activatable {

// }



// // function applyMixin(derivedCtor:any,baseCtor:any[]){
// //      baseCtor.forEach(baseCtor=> {
// //         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name=>{
// //             Object.defineProperty(derivedCtor.prototype,name,Object.getOwnPropertyDescriptor(baseCtor.prototype,name))
// //         })
// //      })
// // }
// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//     baseCtors.forEach(baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//             Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
//         })
//     });
// }

// let smartObj = new SmartObject();
// applyMixins(SmartObject,[Disposable,Activatable])
// setTimeout(() =>smartObj.isteract(),1000)


// Disposable Mixin
// class Disposable {
//     isDisposed: boolean;
//     dispose() {
//         this.isDisposed = true;
//     }

// }

// // Activatable Mixin
// class Activatable {
//     isActive: boolean;
//     activate() {
//         this.isActive = true;
//     }
//     deactivate() {
//         this.isActive = false;
//     }
// }

// class SmartObject {
//     constructor() {
//         setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
//     }

//     interact() {
//         this.activate();
//         this.dispose();
//     }
// }

// interface SmartObject extends Disposable, Activatable {}
// applyMixins(SmartObject, [Disposable, Activatable]);

// let smartObj = new SmartObject();
// setTimeout(() => smartObj.interact(), 1000);

// ////////////////////////////////////////
// // In your runtime library somewhere
// ////////////////////////////////////////

// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//     baseCtors.forEach(baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//             Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
//         });
//     });
// }


//mixins typescript 混合
type Class = new (...args:any) => any;

function fatherMixins<Base extends Class>(base: Base){
       return class extends base {
          fatherName:string;
          displayFatherName(){
            return this.fatherName
          }
       }
}


function motherMixins<Base extends Class>(base:Base){
    return class extends base {
        motherName:string;
        displayMotherName(){
            return this.motherName
        }
    }
}

class Father {
    fatherName: string;
    displayFatherName(){
        return this.fatherName
    }
    constructor(_fatherName: string){
        this.fatherName = _fatherName
    }
}

class Mother {
    motherName: string;
    displayMotherName(){
        return this.motherName
    }
    constructor(_motherName: string){
        this.motherName = _motherName
    }
}
let MixinFatherMother = fatherMixins(motherMixins(class {

}))
class Child extends MixinFatherMother {
        _childName:string;
        constructor(fatherName:string,motherName:string,childName:string){
            super()
            this._childName = childName
            this.fatherName = fatherName
            this.motherName = motherName
        }
        displayMname(){
           return  super.displayMotherName()
        }
        displayFname(){
            return super.displayFatherName()
        }
        displayChild(){
            return this._childName
        }

}


let oName = new Child('Mark','Yuan','Merrey');
console.log(oName.displayFname()); //Mark
console.log(oName.displayChild());  //Merrey
console.log(oName.displayMname());  //Yuan
//class Child extends Father,Mother { }  //这样写会报错，类只能扩展一个类