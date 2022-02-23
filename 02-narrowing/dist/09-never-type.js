"use strict";
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            Math.PI * shape.radius ** 2;
            break;
        case 'square':
            return shape.sideLength ** 2;
        default:
            console.log(shape);
            const _check = shape;
    }
}
getArea({ kind: 'circle', radius: 2 });
const a = undefined;
const b = a;
