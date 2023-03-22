let x: string = '1'
class Methods1 {
    x:string = 'hello'
    getName(){
        x = 'world'
        this.x = 'world'
    }
}
console.log(x) // '1'
const methods1 = new Methods1()
methods1.getName()
console.log(x) // 'world