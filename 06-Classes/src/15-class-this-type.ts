// class Box {
//     content: string = ''
//     set(value: string) {
//         this.content = value
//         return this
//     }
// }
// class ClearBox extends Box {
//     clear() {
//         this.content = ''
//     }
// }
// const boxBase = new Box()
// const clearBoxInsance = new ClearBox()
// // const returnValue = boxBase.set('hello')
// // console.log(returnValue)
// const returnValue1 = new ClearBox()
// returnValue1.set('')
// console.log(returnValue1)

class Box { 
    content: string = ''
    sameAs(other: this) { 
        console.log(this)
        return other.content === this.content
    }
}
class DerivedBox extends Box { 
    otherContent: string = '?'
}
const boxInstance = new Box()
const derivedBoxInstance = new DerivedBox()

// console.log(derivedBoxInstance.sameAs(boxInstance))  // error