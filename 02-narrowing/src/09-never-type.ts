type Circle = {
    radius: number,
    kind: 'circle'
}
type Square = {
    sideLength: number,
    kind: 'square'
}
type triangle = {
    sideLength: number,
    kind: 'triangle'
}

type Shape = Circle | Square 

function getArea(shape: Shape) { 
    switch (shape.kind) { 
        case 'circle':
            Math.PI * shape.radius ** 2;
            break;
        case 'square':
            return shape.sideLength ** 2;
        default:
            console.log(shape)
            const _check: string = shape
    }
}

getArea({ kind: 'circle', radius: 2 })

