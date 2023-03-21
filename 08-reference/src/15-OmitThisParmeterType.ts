function fnThis(this:undefined){
    // this.age = age
    // console.log(age)
    console.log('aa')
}
type FnthisType = typeof fnThis
type OmitThisType = OmitThisParameter<typeof fnThis>



const fnThis0:FnthisType = fnThis.bind(undefined)
// fnThis0()  //报错

const fnThis1:OmitThisParameter<typeof fnThis> = fnThis.bind(undefined)
fnThis1()