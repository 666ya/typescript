class ThisBase { 
    name = 'base'
    // getName() {
    //     return this.name
    // }
    getName = ()=> {
        return this.name
     }
    // getName(this: ThisBase) { 
    //     return this.name
    // }
}
const thisInstance = new ThisBase()
const obj = {
    name: 'obj',
    getName: thisInstance.getName
}
const g = thisInstance.getName
console.log(thisInstance.getName())
console.log(obj.getName())
console.log(g())