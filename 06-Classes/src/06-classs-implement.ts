interface Property { 
    x?: number;
    y:number
}
class ImplementEm implements Property { 
    y = 1
}

interface Property1 { 
    x?: number
    y: number
}
class ImplementEm1 implements Property1 { 
    z = 1
    y = 1
    print() { 
        console.log('hello')
    }
}

interface Property2 {}
class ImplementEm2 implements Property2 { 
    y = 1
}



