class Field1 {
    y:number = -1
    x:number = -1
    constructor(){
        this.x = 0
        this.y = 0
    }
}
const field1 = new Field1()
field1.x = 1
field1.y=3
console.log(Object.getPrototypeOf(field1))

class Field2{
    name!:string
}
