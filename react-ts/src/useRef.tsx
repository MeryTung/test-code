import { useRef } from 'react'

const Container = () => {
  const domRef = useRef<HTMLDivElement>(null)
  const valueRef = useRef<number>(123)

  const  operatorRef = () => {
    domRef.current?.getBoundingClientRect()
    valueRef.current +=1 
  }

  return (
    <div ref={domRef}>
      <p>Gao Yuanyuan</p>
    </div>
  )
}


type Person = {username: string}  | {setUsername: string}


interface propType {
  [key:string]: string
}
interface dataType {
  title: string
}

interface dataType2 {
  title: string
}

const data1: dataType  = {
  title: 'hello'
}

const data2: dataType2 = {
  title: 'Gao yuanyuan'
}

let prop: propType

prop = data1
prop = data2


export default Container