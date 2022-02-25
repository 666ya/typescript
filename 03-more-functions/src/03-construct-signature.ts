class Person {
    s: string
    constructor(s: string) { 
        this.s = s
    }
 }
function factor(ctor: any) { 
    return new ctor('hello')
}
const person = factor(Person)