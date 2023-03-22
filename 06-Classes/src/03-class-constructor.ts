// default value
class Constructor1 {
    name: string
    constructor(name:string = 'wold'){
        this.name = name
    }
}

// overloads
class Constructor2 {
    x:number = 0
    y:number | undefined = 0
    s:any = 's'
    constructor(s:string);
    constructor(x:number,y:number)
    constructor(a:string | number,y?:number){
        // this.x = x
        this.y = y
        this.s = a
        console.log(this.x)
    }
}
const constructor2 = new Constructor2('1')

class ConstructorEm<Type> { 
    x: Type
    y: Type
    constructor(x: Type, y: Type) { 
        this.x = x
        this.y = y
    }
}
const constructor = new ConstructorEm('x', 'y')