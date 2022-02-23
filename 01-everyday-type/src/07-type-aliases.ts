type Point = {
    x: number,
    y: number
}

function printXy(pt: Point) { 
    console.log(pt.x)
    console.log(pt.y)
}

printXy({x: 100, y: 100})