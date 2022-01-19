"use strict";
function printCoord(p) {
    console.log('x轴的位置为' + p.x);
    console.log('y轴的位置为' + p.y);
}
printCoord({
    x: 100,
    y: 200
});
function getUserInput(str) {
    return str.slice(0, 3);
}
let userInput = getUserInput('hello');
console.log(userInput);
userInput = 'new input';
