class Point {
    x: number
    constructor() { 
        this.x =111
    }
}
const pt = new Point()

// readonly
class Person { 
    readonly name!: string;
    constructor() { 
        this.name = 'Alice'
    }
    setName(s:string) { 
        // this.name = s   //error
    }
}

const person = new Person
// person.name = 'bob'   // error