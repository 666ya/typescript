function doStuff(value: ReadonlyArray<string>) {
    const copy = value.slice()
    // const newValue = value.splice(1,1)  //会报错
    console.log(copy)
    console.log(value)
    // value.push('222')     //会报错
}


doStuff(['1','2','3'])

let x: readonly string[] = ['111']
let y: string[] = []

