// function firstElement(arr: any[]) {
//     return arr[0]
// }
// firstElement([1,2,3,4])
function firstElement<Type>(arr: Type[]): Type { 
    return arr[0]
}
firstElement([1,2,4])