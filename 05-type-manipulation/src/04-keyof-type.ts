type Point = {x: number;y: number}

type P =  keyof Point
let p1: P = 'x'


type Arrayish = { 
    [n:number] : any
    age: string
}

type A = keyof Arrayish
const keyOfValue: A = 'age'
