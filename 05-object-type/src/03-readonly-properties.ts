// interface SomeType { 
//     readonly prop: number
// }

// const obj: SomeType = {
//     prop: 100
// }
// doSomething(obj)
// function doSomething(obj: SomeType) {
//     console.log(obj.prop)
//     // obj.prop++
//     // console.log(obj.prop)
// }

interface Home { 
    readonly person: {
        name: string,
        age: number,
        count?: number
    }
}
const home : Home = {
    person: {
        name: 'flexi',
        age:20
    }
}
// printHome(home)
// function printHome(home: Home) {
//     home.person = {
//         name : 'olx'
//     }
//     console.log(home.person.age)
// }

interface WritablePerson { 
    name: string,
    age: number
}

interface ReadonlyPerson { 
    readonly name: string,
    readonly age: number
}

const person : WritablePerson = {
    name: 'test',
    age: 100
}
const readonlyPerson: ReadonlyPerson = person
console.log(readonlyPerson.age) 
person.age++
console.log(readonlyPerson.age)

// readonlyPerson.age++
// console.log(person.age)