class MyClass {
    name="MyClass"
    getName(this: MyClass){
        return this.name
    }
    // 箭头函数
    // getName= ()=> {
    //     return this.name
    // }
}
const c = new MyClass()
console.log(c)
const obj = {
    name: 'obj',
    getName: c.getName
}
console.log(obj.getName())

// const g = c.getName
// g()
// class DeriveClass extends MyClass {
//     constructor(){
//         super()
//         console.log(this.getName)
//     }
// }
// const deriveClass = new DeriveClass()
