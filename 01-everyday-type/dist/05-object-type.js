"use strict";
function printCoord(pt) {
    console.log(pt.x);
    console.log(pt.y);
}
printCoord({ x: 3, y: 7 });
function printName(obj) {
    var _a;
    // if (obj.last !=== undefined) {
    //     console.log(obj.last?.toLocaleLowerCase())
    // }
    // or
    (_a = obj.last) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
}
printName({ first: 'bob' });
printName({ first: 'Alice', last: 'Assion' });
