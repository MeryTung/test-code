//联合类型和交叉类型
// function foo(a: string, b: any){
//     if(typeof b === 'number'){
//         return Array(b+1).join('') + a
//     }else if(typeof b == 'string'){
//         return a + b
//     }
//     throw new Error('error')
// }

// declare function padLeft(value: string, padding: any): string;
// let indentedString = padLeft('Hello world',true)
// console.log(indentedString)
// console.log(foo('Hello world',4))

//具有公共字段地联合
// interface Birds {
//     fly():void;
//     legEggs():void
// }

// interface Fish {
//     swim():void;
//     legEggs():void
// }

// declare function getSmallPet(): Birds | Fish

// let pet = getSmallPet()
// console.log(pet.legEggs())
//console.log(pet.fly())  这里会报错，因为Fish没有fly这个方法，不能确定到底用的Birds还是Fish接口

//可区分联合
// type NetworkLoadingState = {
//     state: "loading";
//   };
  
//   type NetworkFailedState = {
//     state: "failed";
//     code: number;
//   };
  
//   type NetworkSuccessState = {
//     state: "success";
//     response: {
//       title: string;
//       duration: number;
//       summary: string;
//     };
//   };
//   type NetworkFromCachedState = { state: "from_cache" };
//   type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState | NetworkFromCachedState
//   function assertNever(x: never): never {
//     throw new Error("Unexpected object: " + x);
//   }

//   function logger(state:NetworkState):string{
//         switch(state.state){
//            case 'loading':
//             return 'loading';
//             case 'failed':
//             return 'failed';
//             case 'success':
//             return 'success';
//             default:
//                return assertNever(state)
//         }
//   }

//   console.log(logger({state:'loading'}))
//   console.log(logger({state:' fail',code: 10}))
//   console.log(logger({state:'success',response: { title: 'Success', duration: 100, summary: 'Success'}}))

  //交叉类型，就是数学里面的集合，将多个类型合并为一个&
  interface ErrorHandling {
    success: boolean;
    error?: { message: string }; //对象
  }
  
  interface ArtworksData {
    artworks: { title: string }[];
  }
  
  interface ArtistsData {
    artists: { name: string }[];//数组对象
  }
  
  // 这些接口被组合后拥有一致的错误处理，和它们自己的数据
  
  type ArtworksResponse = ArtworksData & ErrorHandling;
  type ArtistsResponse = ArtistsData & ErrorHandling;
  
  const handleArtistsResponse = (response: ArtistsResponse) => {
    if (response.error) {
      console.error(response.error.message);
      return;
    }
  
    return response.artists;
  };

 let bar = {
    success: false,
    // error:{message:'错误'},
    artists:[{name:'shabi'}]
 }
  console.log( handleArtistsResponse(bar))
