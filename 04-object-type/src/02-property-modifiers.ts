// 可选属性
interface PaintPoint { 
    xPos?: number,
    yPos?: number
}
// 只读属性
interface ReadOnlyType { 
   readonly prop: string
}
function doSomething(obj: ReadOnlyType) { 
    // obj.prop = 'aaa' error
}
const  obj = {
    prop: 'obj'
}
doSomething(obj)
console.log(obj)