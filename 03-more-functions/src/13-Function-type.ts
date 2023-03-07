
function doSth(f:Function){
   return f(1,2,3)
}
doSth((a: any,b: any,c: any)=>{
    return a+b+c
})
