class PrivateBase { 
    private x: number
    #name = '姓名'
    constructor() { 
        this.x = 10
    }
    private greet() { 
        console.log(this.x)
        // console.log(this.name)
    }
}
const privateInstance = new PrivateBase()
// console.log(privateInstance.x) // error
console.log(privateInstance['x'])
// console.log(privateInstance['name'])

class PrivateDerived extends PrivateBase { 
    constructor() { 
        super()
        // this['x'] = 100
        this['greet']()
        // console.log(this['x'])
        // console.log(this.x)
    }
}
const derivedInstance = new PrivateDerived()
// console.log(derivedInstance['x'])