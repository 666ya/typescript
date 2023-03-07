type vodiFunc = ()=>void
const f1:vodiFunc = ()=>{
    return 111
}
const f2:vodiFunc = ()=>true

const f3:vodiFunc = function(){
    return true
}
// 合理
let v1 = f1()
let v2 = f2()
let  v3 = f3()

// const src = [1,2,3]
// const dist = [0]
// src.forEach(el=> dist.push(el))


// type voidFunc1 =  {
//     (): void
// }
// const f4: voidFunc1 = ()=> true
