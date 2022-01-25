type Fish = {
    swim: () => {}
}
type Bird = {
    fly: () => {}
}

function move(animal: Fish | Bird) { 
    if ('swim' in animal) {
        return animal.swim()
    }
}