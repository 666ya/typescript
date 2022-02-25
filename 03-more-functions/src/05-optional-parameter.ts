function f(x:number = 10,n: number = 2) { 
    console.log(x.toFixed(n))
}
f()


function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) { 
        callback(arr[i])
    }
}


myForEach([1, 2, 3], (a, i) => console.log(a, i))
