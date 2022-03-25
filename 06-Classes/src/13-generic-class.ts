class GenericClass<Type> { 
    contents: Type
    constructor(value: Type) { 
        this.contents = value
        this.x = value
    }
    private x: Type
}
const genericInstance = new GenericClass('hello')