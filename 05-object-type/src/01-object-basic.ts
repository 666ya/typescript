// function greet(person: { name: string; age: number }) {
//     return 'hello' + person.name
// }


// interface Person {
//     name: string,
//     age: number
// }
// function greet(person: Person) {
//     return 'hello' + person.name + 'interface'
// }\


type Person = {
    name: string,
    age:number
}
function greet(person: Person) {
     return 'hello' + person.name + 'type'
}