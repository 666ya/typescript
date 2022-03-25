class ProtectedBase { 
    protected x = 10
    protected greet() { 
        console.log(this.x)
    }
}
const protectedInstance = new ProtectedBase()
// console.log(protectedInstance.x)
console.log(protectedInstance['x'])

class ProtectedDerived extends ProtectedBase { 
    constructor() { 
        super()
        this.x = 1000
    }
}
const protectedDerived = new ProtectedDerived()
// console.log(protectedDerived.x)
console.log(protectedDerived['x'])