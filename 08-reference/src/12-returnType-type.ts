type ReturnT0 = ReturnType<()=> string>
 const return0 : ReturnT0 = '1111'


 const returnFn1 = function(a:number):number {
    return   a
 }

type ReturnT1 = ReturnType<typeof returnFn1>
const return1:ReturnT1 = 0


const returnFn2 = function(a:number):void {
   console.log(a)
 }
type ReturnT2 = ReturnType<typeof returnFn2>
const return2:ReturnT1 = 0


// type ReturnT3 = ReturnType<string>  //报错


type ReturnT3 = ReturnType<any>

type ReturnT4 = ReturnType<never>