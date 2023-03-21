declare function fl(arg: {a:number,b:string}) : void

type ParameterT0 = Parameters<()=> string>

type ParameterT1 = Parameters<(s:string) => void>
const parameter1: ParameterT1 = ['11']


type ParameterT2 = Parameters<<T>(arg: T)=> T>

type ParameterT3 = Parameters<typeof fl>

type Fn = <T>(arg:T) => T

const f1: Fn = (a) => a

f1<string>('111')



const paraFn = function(this:any, name: string){
    this.name = name
}

type ParameterT4 = Parameters<typeof paraFn>




