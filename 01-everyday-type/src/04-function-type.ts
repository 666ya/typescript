/**
 * 函数声明
 */ 
function fn(x:string) :void {
    console.log(x)
}/**
 *  函数表达式
 */
const fn1 = function(x:string) :void {
    console.log(x)
}
const fn2: (x:string)=>void = function(y: string):void {
    console.log(y)
}
// 类型别名定义
type FnType = (x:string)=>void
const fn3 : FnType = function(y:string):void {
    console.log(y)
}
type FnType1 = {
    (x?:boolean):void
}

const fn4: FnType1 = (x)=>{
    console.log(x)
}
// 接口定义
interface IFn {
    (x:number):number
}
const fn5: IFn = (x)=>{
    return x
}

// 匿名函数会推断

const names = ['1','2','3']
function printValue(x:string){
    console.log(x)
}
names.forEach(printValue)

names.forEach(function(item){
    console.log(item)
})