// type Lengthwise = {
//     length: number
// }
interface Lengthwise { 
    length: number
}
function loginIdentifyFn<Type extends Lengthwise>(arg: Type): Type { 
    console.log(arg.length)
    return arg;
}