class StaticInstance { 
    static x = 10
    static greet() { 
        console.log(StaticInstance.x)
    }
}
const staticInstance = new StaticInstance()
// console.log(staticInstance)
// console.log(StaticInstance.x)

class StaticDerived extends StaticInstance { 
    constructor() { 
        super()
        StaticDerived.greet()
        StaticDerived.x = 1000
        console.log(StaticDerived.x)
    }
}
const staticDerived = new StaticDerived()
// console.log(staticDerived['x']) // error


/**
 * static 区块
 */
class Foo { 
    private static x = 25
    static #count = 10
    greet() { 
        console.log(Foo.#count)
    }
    // get count() { 
    //     return Foo.#count
    // }
    static { 
        try {
            const lastInstance = {
                length: 100
            }
            Foo.#count = lastInstance.length + Foo.x
        }
        catch { }
    }
}
const fooInstance = new Foo()
fooInstance.greet()
// console.log(fooInstance.count)
