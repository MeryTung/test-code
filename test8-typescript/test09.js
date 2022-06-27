//联合类型和交叉类型
// function foo(a: string, b: any){
//     if(typeof b === 'number'){
//         return Array(b+1).join('') + a
//     }else if(typeof b == 'string'){
//         return a + b
//     }
//     throw new Error('error')
// }
var handleArtistsResponse = function (response) {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    return response.artists;
};
var bar = {
    success: false,
    // error:{message:'错误'},
    artists: [{ name: 'shabi' }]
};
console.log(handleArtistsResponse(bar));
