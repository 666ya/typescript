function identify<Type>(age: Type): Type { 
    return age
}

let myIdentify1: <Type>(age: Type) => Type = identify

let myIdentify2: <Input>(age: Input) => Input = identify

let myIdentify3: { <Type>(age: Type): Type } = identify

interface GenericIdentifyFn { 
    <Type>(age:Type):Type
}
let myIdentify4: GenericIdentifyFn = identify

interface GenericIdentifyTypeFn<Type> { 
    (arg: Type): Type
}
let myIdentify5: GenericIdentifyTypeFn<number> = identify