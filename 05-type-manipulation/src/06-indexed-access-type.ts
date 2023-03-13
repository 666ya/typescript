interface Person  {
    age: number;
    name: string
    alive: boolean
}

const obj1 = {
    age: 2
}
type key = "name"
type name = Person['age']
type I1 = Person['age' | 'name']

type I2 = Person[keyof Person]


const MyArray = [
    {
        name: "Alice",
        age: 12
    },
    {
        name: "Bob",
        age: 23
    },
    {
        name: "Eve",
        age: 38
    }
]

type People = typeof MyArray[number]


type Age = typeof MyArray[number]['age']