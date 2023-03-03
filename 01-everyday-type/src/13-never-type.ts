interface Fish {
    kind: 'fish'
    swim: true
}
interface Bird {
    kind: 'bird',
    fly: true
}
type Animal = Fish | Bird

function getAnimal(animal: Animal) {
    switch(animal.kind) {
        case 'bird':
            console.log(animal.kind)
            return animal.kind 
        case 'fish':
            console.log(animal.kind) 
            return animal.kind 
         default: 
          const _exhaustiveValue: never = animal
          return _exhaustiveValue   
    }
}
