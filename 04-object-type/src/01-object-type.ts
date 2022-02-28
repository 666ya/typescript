/**
 * 对象类型表示
 */
// 1、匿名
function objectPrint(person: { age: number, name: string }) { 
    return 'hello ' + person.name
}
// 2、type alias
type PersonType = {
    age: number,
    name: string
}
function objectPrint1(person: PersonType) { 
    return 'hello ' + person.name
}
// interface
interface PersonTypeInterface{ 
    age: number,
    name: string
}
function objectPrint2(person: PersonTypeInterface) { 
    return 'hello ' + person.name
}

