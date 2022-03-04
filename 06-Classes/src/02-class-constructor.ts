class ConstructorEm<Type> { 
    x: Type
    y: Type
    constructor(x: Type, y: Type) { 
        this.x = x
        this.y = y
    }
}
const constructor = new ConstructorEm('x', 'y')