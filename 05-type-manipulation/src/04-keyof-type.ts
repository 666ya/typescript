type Point = { x: number, y: number, z: boolean }
type P = keyof Point

const test: P = 'z'
function printP(x: P) { 
    console.log(x)
}
printP('x')


type Arrayish = { [n: number]: unknown }
type A = keyof Arrayish
function printA(x: A) { 
    console.log(x)
}


type Mapish = {
    [k: string | 'x'] : boolean
}
type M = keyof Mapish
const testM: M = 123
const testM1: M = '123'
const testM2: M = 'x'
