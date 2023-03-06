function f(x:number=10,n: number = 2) { 
    console.log(n.toFixed(x))
}
f()

function myForEach(arr: any[], callback: (arg: any, index: number) => void) :void
function myForEach(arr: any[], callback: (arg: any, index: number) => void) {
    for (let i = 0; i < arr.length; i++) { 
        callback(arr[i],i)
    }
}


myForEach([1, 2, 3], (a, i) => console.log(a, i))


function optionFn(x:number= 2) {
    console.log(x)
}
