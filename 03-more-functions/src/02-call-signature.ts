// type DescriptionFunctions = {
//     description: string,
//     ():void
// }
interface DescriptionFunctions {
    description: string,
    ():void
}
function doSomething(fn: DescriptionFunctions) { 
    console.log(fn() + ': ' + fn.description )
}
function fn() { 
    return 'hello'
}
fn.description = 'call signature'
doSomething(fn)