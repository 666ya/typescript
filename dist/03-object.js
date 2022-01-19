"use strict";
const baseObject = {
    a: 1,
    b: 2
};
console.log(baseObject);
const baseObject1 = {
    x: 1,
    y: 2
};
function printObject(obj) {
    console.log('x轴值为' + obj.x);
    console.log('y轴的值为' + obj.y);
}
printObject(baseObject1);
// 可选
function printName(obj) {
    // if (obj.last !== undefined) {
    //    console.log('名字是'+ obj.first + obj.last.toLocaleLowerCase())
    // }
    console.log('名字是' + obj.first + obj.last?.toLocaleLowerCase());
}
printName({
    first: '李白',
    last: undefined
});
