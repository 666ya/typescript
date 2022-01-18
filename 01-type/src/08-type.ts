type Point = {
    x: number,
    y: number
}
function printCoord(p: Point) {
    console.log('x轴的位置为' + p.x)
    console.log('y轴的位置为'+ p.y)
}
printCoord({
    x: 100,
    y: 200
})

type UnionType = string | number

type UserInputSting = string

function getUserInput(str: string) : UserInputSting{
    return str.slice(0,3)
}

let userInput = getUserInput('hello')
console.log(userInput)
userInput = 'new input'
