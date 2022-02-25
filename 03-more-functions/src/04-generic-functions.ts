// function firstEelment(arr: any[]) {
//     return arr[0]
// }
// let a = firstEelment([1, 2, 3])
// a = 'aaa'


function firstEelment<T>(array: T[]): T | undefined { 
    return array[0]
}
let a = firstEelment([1, 2, 3])
a = 12

function map<Input, OutPut>(array: Input[], fn: (arg: Input) => OutPut): OutPut[] { 
    return array.map(fn)
}
const parsed = map(['1', '2', '3'], (el: string) => parseInt(el))
console.log(parsed)


function minimumLength<T extends { length: number }>(obj:T,minum: number) : T { 
    if (obj.length >= minum) {
        return obj
    } else { 
        return {
            length: minum
        } as T
    }
}


function combine<Type>(arr1: Type[], arr2: Type[]): Type[] { 
    return arr1.concat(arr2)
}

const arr = combine<string | number>([1,2,3], ['helloworld'])