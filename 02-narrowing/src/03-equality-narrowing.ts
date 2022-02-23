function example(x: string | number, y: string | boolean) { 
    if (x === y) {
        console.log(x.toUpperCase())
        console.log(y.toUpperCase())
    } else { 
        console.log(x)
        console.log(y)
    }
}

console.log(example('ceshi', 'ceshi'))