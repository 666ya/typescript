function Fn1(name: string) {
    console.log(name)
}

class Contruct {
    name: string
    constructor(name:string){
        this.name = name
    }
}

type Constuc0 = ConstructorParameters<typeof Contruct>

const constructType:Constuc0 = ['111']  // 元组

type Constuc1 = ConstructorParameters<FunctionConstructor>

const constructArray: Constuc1 = ['1','2'] // 数组

type Contruct2 = ConstructorParameters<any>
const constructArray2:Contruct2 = ['111']



type Construct3 = ConstructorParameters<never>
