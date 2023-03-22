class Readonly1 {
    readonly name!: string
    constructor(){
        this.name = 'world'
    }
}
const readonly1 = new Readonly1()
// readonly1.name = '修改' //报错

class Derived extends Readonly1 {
    name:string = '2'
    constructor(){
        super()
        // console.log(this.name)
        this.name = 'hello'
    }
}