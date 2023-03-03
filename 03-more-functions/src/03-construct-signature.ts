class Person<T> {
   name: T
   constructor(name: T){
    this.name = name
   }
 }
// exmaple1
 type SomeConstructor = {
    new (s:string): any
 }

function factor(ctor: SomeConstructor) { 
    return new ctor('hello')
}
const person = factor(Person)
console.log(person)
// Date类型
type DateConstruct = {
    (s:string): Date
}

// 合并 call & construct signature
type CombineConstructor = {
   new (str:string): Date
   (n?: string): string;
}

function combineFactor(ctor: CombineConstructor){
    return new ctor('111')
}


const combineObject = combineFactor(Date)
