function len<Type>(s: Type): number;
function len<Type>(arr: Type[]): number;
function len(sOrArray: any) { 
    console.log(sOrArray.length)
    return sOrArray.length
}
len('')
len([0])
len(Math.random() > 0.5 ? 'hello' : [1,2])