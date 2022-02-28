type ObjectPatameter = {
    a: number;
    b: number;
    c: number
}
// function sum({ a, b, c }: {a: number,b:number,c:number}) { 
//     return a + b + c
// }
function sum({ a, b, c }: ObjectPatameter) { 
     return a + b + c
}
sum({a: 1,b:2,c:3})