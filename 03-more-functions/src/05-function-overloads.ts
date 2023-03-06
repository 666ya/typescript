function retunLengthFn(s:string) :number
function retunLengthFn(s:any[]) :number
function retunLengthFn(s:any){
    return s.length
}
// retunLengthFn(Math.random() > 0.5 ? '111' : [0])