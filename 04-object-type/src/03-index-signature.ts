// 数组的索引签名
interface StringArray { 
    [index: number]: string
}
const myArray: StringArray = ['1', '2', '3']
const item = myArray[1]
console.log(item)


// 对象的索引签名
interface ObjectProperType  {
    [property: string]:string;
}

const objProperty: ObjectProperType = {
    age: '12',
    name: '张三'
}