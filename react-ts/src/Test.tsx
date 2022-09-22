// import React from 'react';
import { PropsWithChildren,useState,useCallback,useMemo,useReducer } from 'react'

interface  ICellProps<TData> {
  filed: keyof TData
}

const Cell =  <T extends Record<string,any>>(props:PropsWithChildren<ICellProps<T>>) => {
  return <p></p>
}

interface IDataStruct {
  username: string,
  age: number,
}


const App = () => {
  <>
    <Cell<IDataStruct> filed="username"></Cell>
    <Cell<IDataStruct>  filed="age"></Cell>
  </>
}


interface IData {
  username: string,
  age: number
}

const Container = () =>  {
  const [state1,setState1] = useState('Gaoyuanyuan')
  const [state2,setState2] = useState<string>()
  const [data,setData] = useState<Partial<IData>>({} as IData)
  const handler1 = useCallback((input:number) =>{
    return input > 100
  },[])
}

// 显式推导函数返回类型
const handler2 = useCallback<(input:number,compare:boolean)=>boolean > (
  (input:number)=>{
    return input > 100
  },[])


const result = useMemo(()=>{ return 'hello'},[])
const result2 = useMemo<{username?:string}>(()=> {return {}},[])



type state = ReturnType<typeof useState<1>>



const initialState = { count: 0 }

type Actions =
  | {
    type: 'inc';
    payload: {
      count: number;
      max?: number;
    };
  }
  | {
    type: 'dec';
    payload: {
      count: number;
      min?: number;
    };
  }

function reducer(state: typeof initialState, action: Actions) {
  switch (action.type) {
    case 'inc':
      return {
        count: action.payload.max
          ? Math.min(state.count + action.payload.count, action.payload.max)
          : state.count + action.payload.count,
      }
    case 'dec':
      return {
        count: action.payload.min
          ? Math.max(state.count + action.payload.count, action.payload.min)
          : state.count - action.payload.count,
      }
    default:
      throw new Error('Unexpected Action Received.')
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <>
      Count: {state.count}
      <button
        onClick={() =>
          dispatch({ type: 'dec', payload: { count: 599, min: 0 } })
        }
      >
        -(min: 0)
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'inc',
            payload: {
              count: 599,
              max: 599,
            },
          })
        }
      >
        +(max: 599)
      </button>
    </>
  )
}


// export interface IContainerProps {
//     visible: boolean;
//     controller: () => void
// }


// const Container :React.FC<IContainerProps > = ({
//     visible = false,
//     controller = () => {}
// }:IContainerProps) => {
//     return <p>林不渡！</p>;
//   };