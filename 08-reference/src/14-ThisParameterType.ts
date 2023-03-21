function toHex(n:number){
    return n.toString(15)
}



type ThisParameter1 = ThisParameterType<typeof toHex>


