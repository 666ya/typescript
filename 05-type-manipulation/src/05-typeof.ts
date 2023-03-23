let s = 'hello'
let n: typeof s

declare const msgBox:(s:string)=> boolean;
const a = msgBox('111')
type shouldContinue = typeof msgBox