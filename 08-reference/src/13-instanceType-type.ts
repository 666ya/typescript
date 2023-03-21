class C {
    x=0
    y=0
}

const c = new C()
console.log(c.x)


type InstanceT0 = InstanceType<typeof C>
const b:InstanceT0 = {
    x:1,
    y:2
}

function Person(this: any,  name:string,age:number){
    this.name = name
    this.age = age
}
const person = new (Person as any) ('a', 18)
const personT = person.prototype
type InstanceT1 = InstanceType<typeof personT>


const instanceStr= new String()
type InstanceType1 = InstanceType<typeof String>
const intance1: InstanceType1 = 'aaa'

