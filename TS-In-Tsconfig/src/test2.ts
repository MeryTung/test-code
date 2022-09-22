import { expectType }  from 'tsd'
type FuncStruct = (...args:any[]) => any
type FunctionsKey<T extends object,ValueType> =  {
    [K in keyof T]: T[K] extends ValueType ? K : never
}[keyof T]

type FunctionRes<T extends object> = FunctionsKey<T,FuncStruct>

type Tmp<T extends object> = {
    [K in keyof T]: T[K] extends FuncStruct ? K : never
}


type Res = Tmp<{
    foo:() => void, 
    bar:() => number,
    baz: number
}>



type WhatWillGet = Res[keyof Res]




expectType<
 FunctionRes<{
    foo:() => void, 
    bar:() => number,
    baz: number
}>
 >('foo')



type Res2 = Partial<{
    foo: string,
    bar: number, 
    baz: boolean
}>

   type WhatWillGet2 = [keyof Res2]
 

   //type PickByValueType<T extends object,ValueType> =  Pick<T,FunctionsKey<T,ValueType>>
   type FilteredValueType<T extends object,ValueType> = {
    [K in keyof T]-?: T[K] extends ValueType ? never : K
   }

  // type OmitByValueType<T extends object,ValueType> = Pick<T,FunctionsKey<T,ValueType>>

   //expectType<PickByValueType<{foo: string,bar:number},number>>({bar:123})

 //  expectType<OmitByValueType<{foo:string},string>>({foo:'123'})



   type Condition<Value,Condition,Resolve,Reject> =  Value extends Condition ?  Resolve : Reject;
   type ValueTypeFilter<T extends object,ValueType,Positive extends boolean> = {
      [K in keyof T]: T[K] extends ValueType ? Condition<Positive,true,K,never>  : Condition<Positive,true,never,K>
   }[keyof T]
   
   type PickByValueType<T extends object,ValueType> = Pick<T,ValueTypeFilter<T,ValueType,true>>
   type OmitByValueType<T extends object,ValueType> = Pick<T,ValueTypeFilter<T,ValueType,false>>

   type Condition2<T> = T extends  1|2|3 ? T : never;

   type StrictConditional<Value,Condition,Resolve,Reject,FallBack=never> = 
   [Value] extends [Condition] ? 
   [Condition] extends [Value] ?
   Resolve : Reject:FallBack;

   type Res3 = StrictConditional<1|2,1|2|3,true,false>
   type Res4 = StrictConditional<1|2|3,1|2,true,false>   
   
   type Res5 = StrictConditional<1|2,1|2,true,false>//false
    type Res6 = StrictConditional<{foo:1,bar:2},1|2,true,false>

   type StrictValueTypeFilter<T extends object,ValueType,Positive extends boolean  = true> = {
       [K in keyof T]: StrictConditional<ValueType,T[K], Positive extends true ? K : never,Positive extends true ? never : K , Positive extends true ? never : K>
   }[keyof T]

    type StrictPickByValueType<T extends object,ValueType> = Pick<T,StrictValueTypeFilter<T,ValueType>> 

    type StrictOmitByValueType<T extends object,ValueType> = Pick<T,StrictValueTypeFilter<T,ValueType,false>>

     
     expectType<StrictPickByValueType<{ foo: 1; bar: 1 | 2; baz: 1 | 2 | 3 }, 1 | 2>>({bar:2})
     
     expectType<StrictOmitByValueType<{ foo: 1; bar: 1 | 2 ; baz: 1 | 2 | 3 }, 1 | 2>>({
        foo:1, baz: 3
    }
    )
  //   expectType<StrictConditional<{foo:1,bar:2},1|2,true,false>>

    interface VIP {
        vipExpires: number;
    }
    
    interface CommonUser {
        promotionUsed: boolean;
    }
    interface Visitor {
        refererType: string;
      }

     type Flatten<T> = { [K in keyof T]: T[K] };
     type Without<T,U> = {[P in Exclude<keyof T,keyof U>]?: never} 
     type XOR<T,U> = (Without<U,T>&T) | (Without<T,U>&U)

     type XORUser = XOR<VIP,CommonUser>
     type tmp8 = Flatten<Without<VIP,CommonUser>>

     type Tmp2 = Flatten<tmp8 & CommonUser>;
     type tmp3 = Exclude<VIP,CommonUser>

     expectType<XORUser>({promotionUsed:true})

    

      type XORUser2 = XOR<VIP, XOR<CommonUser, Visitor>>;

     type tm10 = Exclude<1|2,1>

     

    //分布式条件类型 1.是否通过泛型传入
//    type Re3 = Condition2<1|2|3|4|5>

//    type Res4 = 1|2|3|4|5 extends 1|2|3 ? 1|2|3: never;

//    type Naked<T> = T extends boolean ? 1 : 2;

//    type Wrapper<T> =[T] extends [boolean] ? 1 : 2;
     

//集合工具类进阶
//并集
   type  Concurrence<A,B> = A | B;
   type Intersection<A,B> = A extends B ?  A :never;
   type  Difference<A,B> = A extends B ? never : A
   type Complement<A, B extends A> = Difference<A,B>
    
//    type tmp5 = Intersection<1|4,1|2|3>
//    type tmp6 = Difference<5,1|2|3|4>
//    type type7 = Complement<1|2|3,1|2>


   type PlainObjectType  = Record<string,any>

   type ObjectKeysConcurrence<T extends PlainObjectType,U extends PlainObjectType> = keyof T | keyof U;
   type ObjectKeysIntersection<T extends PlainObjectType,U extends PlainObjectType> = keyof T extends keyof U ? keyof T : never
   type ObjectKeysDifference<T extends PlainObjectType, U extends PlainObjectType> = Difference<keyof T,keyof U>

   type Equal<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? A
  : B;
 

      

   //分布式条件类型
//    type Res6 = Naked<number|boolean>
//    type Res7 = Wrapper<[number|boolean]>


//    type IsAny =  any extends string ? 1: 2;
//    type IsAny2<T> = T extends string ? 1 : 2;

//    type Res8 = IsAny;
//    type Res9 = IsAny2<any>


//    type IsNever = never extends never ? 1 : 2;
//    type IsNever2<T> = [T] extends [never] ? 1 : 2;


//    type Tmp1 = never extends string ? 1: 2
//    type Tmp2<T> = T extends string ? 1 : 2

//    type Res10 = IsNever2<never>
//    type Res11 = IsNever2<'hello'>

//    type Res12 = Tmp1
//    type Res13 = Tmp2<never>   //never通过泛型，直接返回never


