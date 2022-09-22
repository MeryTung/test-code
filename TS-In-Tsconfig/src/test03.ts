/// <reference path="./other.d.ts" />
/// <reference types="node" />
/// <reference lib="dom" />

import { expectType } from 'tsd';


type World = 'TypeScript';
type Getters = `hello ${string}`
type Getter<T extends string | number | boolean | bigint | null | undefined | never> = `hello ${T}`

type getter1 = Getter<true>

type Test1<T extends Getters> = T;

type tmp1 = Test1<'hello nihao'>

type Brand = 'iphone' | 'xiaomi' | 'honor';
type Memory =  '16G' | '64G';
type ItemType = 'official' | 'second-hand';

type SKU = `${Brand}-${Memory}-${ItemType}`

interface Foo {
    a:string,
    b:number,
     c:boolean,
}

type ChangeListener  =  {
    on: (change:`${keyof Foo}change`) => void
}


// declare let listener:ChangeListener;
// listener.on('achange')



// type CopyWithRename<T extends object> = { [K in keyof T as `modified_${string & K}`]: T[K]}
type CopyWithRename<T extends object> = { [K in keyof T as `modified_${Capitalize<string & K>}`]: T[K]}

type copiedFoo = CopyWithRename<Foo>

//模板字符串类型

type Upper<T extends string> = `${Uppercase<T>}`

type tmp3 = Upper<'hello'>

type Lower<T extends string> = `${Lowercase<T>}`

type tmp4 = Lower<'MARK'>

type Capit<T extends string> = `${Capitalize<T>}`

type tmp5 = Capit<'mark'>

type unCapit<T extends string> = `${Uncapitalize<T>}`
type tmp6 = unCapit<'Mark'>


type ReverseName<T extends string> =  T extends `${infer First} ${infer Last}` ? `${Capitalize<Last>} ${First}` : T
type tmp7 = ReverseName<'Tina 599 Mark'>


 type PickByValueType<T extends object,Type> = {
    [k in keyof T as T[k] extends  Type ? k : never]: T[k]
}


type _Include<Str extends string,Search extends string> = Str extends `${infer _A}${Search}${infer _B}` ? true : false;
type Include<Str extends string,Search extends string> = Str extends '' ?  Search extends ''? true:false:_Include<Str,Search>
type tmp8 = Include<'TinaMarkYuan','Yuan'>
type tmp9 = Include<' ',''>
type IncludeRes5 = _Include<'', ''>; // false
type TrimLeft<V extends string> = V extends ` ${infer R}` ? R : V;
type TrimRigth<V extends string> = V extends `${infer R} ` ? R : V; 
type Trim<V extends string> = V extends ` ${infer R} ` ? R : V;

type TrimSloopLeft<Str extends string> =  Str extends ` ${infer R}` ? TrimSloopLeft<R> : Str;

type _StartsWith<
  Str extends string,
  Search extends string
> = Str extends `${Search}${infer _R}` ? true : false;

type StartsWith<Str extends string, Search extends string> = Str extends ''? Search extends ''? true : _StartsWith<Str,Search>: _StartsWith<Str,Search>


type tmp10 = TrimLeft<' hello,typescript'>
type tmp11 = TrimRigth<'hello,typescript '>
type tmp12 = Trim<' hello,typescript '>

type tmp13 = TrimSloopLeft<'    hello,typescript'>


type tmp14 = StartsWith<'Gaoyuanyuan','Gao'>
type tmp15 = StartsWith<' ', ''>;
type tmp16 = StartsWith<'',''>


type Replace<Str extends string, Search extends string,Replacement extends string> = Str extends `${infer First}${Search}${infer Last}` ? `${First}${Replacement}${Last}` :  Str;
type ReplaceAll<Str extends string, Search extends string,Replacement extends string> = Str extends `${infer First}${Search}${infer Last}` ? ReplaceAll<`${First}${Replacement}${Last}`,Search,Replacement>: Str


type ReplaceRes1 = Replace<'Gaoyuanyuan','yuan','ting'>
type ReplaceRes2 = ReplaceAll<'Gao yuan yuan yuan yuan yuan yuan yuan yuan','yuan','ting'>


//split

type Split<Str extends string,Delimiter extends string> = Str extends `${infer Hail}${Delimiter}${infer Tail}` ? [Hail,...Split<Tail,Delimiter>]: Str extends Delimiter? [] : [Str];
type tmp17 = Split<'1-2-3-4-5-6-7','-'>

type SplitLen<Str extends string,Delimiter extends string> = Split<Trim<Str>,Delimiter>['length'];

type tmp18 = SplitLen<'Gao-yuan-yuan','-'>

// @ts-expect-error
type Join<List extends Array<string|number>,Delimiter extends string> =  List extends [] ? '' :List extends [string|number]?`${List[0]}`: List extends [string | number, ...infer Rest] ? `${List[0]}${Delimiter}${Join<Rest, Delimiter>}` : string

type tmp19 = Join<['js','ts','java'],'-'>


type SnakeCase2CamelCase<Str extends string> = Str extends `${infer Head}${'-'}${infer Rest}`? `${Head}${SnakeCase2CamelCase<Capitalize<Rest>>}` : Str ;
type tmp20 = SnakeCase2CamelCase<'gao-yuan-yuan'>

expectType<SnakeCase2CamelCase<'gao-yuan-yuan'>>('gaoYuanYuan')



// const name: string = 599;
// const age: number = 'linbudu';

/**@type {string}*/
// let myName;
// myName = 599;
//const myName2 = 3938





// declare interface Foo {
//   prop:string
// }
// //类型声明
// declare function foo(input:Foo):Foo;

//let tmp21:ReturnType<typeof foo>



// declare module  'pkg' {
//   const handler: () => boolean
//   export default handler
// }

// import bar from 'pkg'
// const res = bar.handler()


// declare var window: Window & typeof globalThis
// interface Window {
//   userTracker: (...args: any[]) => Promise<void>;
// }

// window.userTracker('click')