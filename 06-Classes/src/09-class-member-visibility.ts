// // public
// class PublicBase {
//     public name = 'public'
//     public sayName() {
//         console.log(this.name)
//     }
//     greet() {
//         this.sayName()
//     }
// }
// const publicBase = new PublicBase()
// publicBase.sayName()
// publicBase.greet()

// protected
// class ProtectedBase { 
//     protected name = 'protected'
//     constructor() {
//         this.name = 'protectedUpdate'
//     }
//     protected sayName() { 
//         console.log(this.name)
//     }
//     protected greet() { 
//         this.sayName()
//     }
// }
// const protectedBase = new ProtectedBase()
// console.log(protectedBase.name)
// protectedBase.sayName() // error
// protectedBase.greet()   // error

// private
class PrivateBase { 
    private name = 'Private'
    constructor() {
        this.name = 'PrivateUpdate'
    }
    sayName() { 
        console.log(this.name)
    }
    private greet() { 
        this.sayName()
    }
}
const privateBase = new PrivateBase()
// console.log(privateBase.name)
privateBase.sayName() // error
// privateBase.greet()   // error

class VisibleSub extends PrivateBase { 
    // getName() { 
    //     super.greet() //error
    // }
}
const visibleInstance = new VisibleSub()
// visibleInstance.getName()