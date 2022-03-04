class StaticEm { 
    static x = 0
    static printX() { 
        console.log(this.x)
        console.log(StaticEm.x)
    }
}
// console.log(StaticEm.x)
// StaticEm.printX()
const staticInstance = new StaticEm()
// console.log(staticInstance.x)
// console.log(staticInstance.printX)
