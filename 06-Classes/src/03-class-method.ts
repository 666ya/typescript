let x: number = 10
class MethodExample<Type>{ 
    x: string = 'hello';
    scaleValue!: Type;
    m() { 
        console.log(this)
        x = 100
        this.x = 'world'
    }
    scale(s: Type): Type { 
        this.scaleValue = s
        return this.scaleValue
    }
}
const method = new MethodExample()
method.m()
console.log(x)


const scaleInstance = new MethodExample<boolean>()
scaleInstance.scale(false)