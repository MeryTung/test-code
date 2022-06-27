//字面量类型
// type eventNames = 'click' | 'scroll' | 'mousemove';
// function handlerEvent(ele:Element, event:eventNames){

// }


// handlerEvent(document.getElementById('a'),'click')
// handlerEvent(document.getElementById('b'),'touch')

//字符串字面量重载

// function createElement(tagName:'img'):HTMLImageElement;
// function createElement(tagName:'input'): HTMLInputElement;
// function createElement(tagName: string): HTMLSelectElement;

// createElement('img')

//字符串字面量
// function rollDice(): 1 | 2 | 3 | 4 {
//     return (Math.floor(Math.random())) as 1 | 2 | 3 | 4;
// }

// console.log(rollDice())


//数字字面量经常用来配置值

// interface MapConfig {
//   lng: number;
//   lat: number;
//   tileSize: 8 | 16 | 32;
// }

// setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });

//布尔字面量类型
interface ValidateSuccess {
     isValid:true;
     reason:false
}

interface  ValidateFailure {
    isValid: false;
    reason: true
}

type ValidateResult = ValidateSuccess | ValidateFailure