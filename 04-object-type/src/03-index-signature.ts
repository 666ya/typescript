interface StringArray { 
    [index: number]: string
}
const myArray: StringArray = ['1', '2', '3']
const item = myArray[1]
console.log(item)

interface ObjectIndexType { 
    readonly [index: number]: number | string
}
const objIndx: ObjectIndexType = { 
    18: 'lsss',
    20: 18
}
// objIndx[18] = 'less' error