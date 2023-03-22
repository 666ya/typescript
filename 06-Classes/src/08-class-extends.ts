// interface Animal { 
//     name: string
// }

// interface Dog extends Animal { 
//     breed: any
// }
// class AnimalHourse { 
//     resident: Animal
//     constructor(animal: Animal) { 
//         this.resident = animal
//     }
// }
// const an = new AnimalHourse({ name: 'sting' })
// console.log(an)

// class DogHouse extends AnimalHourse { 
//     declare resident: Dog
//     constructor(options:Dog) { 
//         super(options)
//     }
// }
// const dog = new DogHouse({
//     name: 'dog',
//     breed: 'aaa'
// })
// console.log(dog)

// // 方法覆盖
// class Base {
//     greet(): void{  
//     console.log('hello world')
//   }
// }

// class Derived extends Base {
//   greet(): boolean{
//     console.log('hello world')
//     return false
//   }
// }
// const instance = new Derived()
// instance.greet()

// 初始化顺序
class OrderBase  {
    name = 'hello'
    constructor() {
        console.log(this.name)
        this.name = 'wrold'
    }
}
class OrederSub { 
    name = 'subHello'
}
const order = new OrederSub()


// 继承内置类型
class MsgError extends Error { 
    constructor(m: string) { 
        super(m)
        Object.setPrototypeOf(this, MsgError.prototype)
    }
    sayHello() { 
        console.log(this.message)
    }
}

const msgError = new MsgError('hell0')
msgError.sayHello()




interface Animal {
    dateOfBirth: any
}
interface Dog extends Animal {
    breed: any
}
class AnimalHouse {
   resident: Animal
   name: string | number
   constructor(animal: Animal,name:string | number) {
    this.resident = animal
    this.name = name
   }
}
class DogHouse extends AnimalHouse {
    declare resident: Dog
    declare name: number
   constructor(dog: Dog, name: string){
    super(dog,name)
   }
}
