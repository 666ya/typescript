// function greet(fn: () => void) {
//     fn();
// }
type GreetFun = () => void
// interface GreetFun1 { 
//     (): void
// }
function greet(fn: GreetFun) { 
    fn()
}
function printStringFn(s?:string) {
    console.log('hell')
}
greet(printStringFn)
