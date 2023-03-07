function multiply(n:number, ...m: any[]) {
    return m.map((x)=> n*x)
}

const multiplyValue = multiply(10,1,2,3,4)