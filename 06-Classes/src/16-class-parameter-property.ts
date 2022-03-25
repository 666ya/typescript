class ParameterBase { 
    content: string
    constructor( public x: string) { 
        this.content = x
    }
}
const paremeter = new ParameterBase('hello')
class ParameterDerived  extends ParameterBase{ 

}
const parameterDerive = new ParameterDerived('aaa')
console.log(paremeter.x)
console.log(parameterDerive.x)