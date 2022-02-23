function printCoord(pt: { x: any, y: number }) { 
    console.log(pt.x)
    console.log(pt.y)
}
printCoord({ x: 3, y: 7 })

function printName(obj: { first: string, last?: string }) { 
    // if (obj.last !=== undefined) {
    //     console.log(obj.last?.toLocaleLowerCase())
    // }
    // or
    obj.last?.toLocaleLowerCase()
}
printName({ first: 'bob' })
printName({ first: 'Alice', last:'Assion' })