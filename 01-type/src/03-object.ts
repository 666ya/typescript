const baseObject = {
    a: 1,
    b: 2
}
console.log(baseObject)

const baseObject1: { x: number, y: number } = {
    x: 1,
    y: 2
}

function printObject(obj: {x: number, y: number}) { 
    console.log('x轴值为' + obj.x)
    console.log('y轴的值为' + obj.y)
}

printObject(baseObject1)


// 可选
function printName(obj: { first: string, last?: string }) { 
    // if (obj.last !== undefined) {
    //    console.log('名字是'+ obj.first + obj.last.toLocaleLowerCase())
    // }
     console.log('名字是'+ obj.first + obj.last?.toLocaleLowerCase())
}
printName({
    first: '李白',
    last: undefined
})