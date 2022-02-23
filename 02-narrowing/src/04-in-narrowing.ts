function swim() { 
    console.log('swim')
}

type Fish = {
    swim: () => void
}
type Bird = () => void

function move(animal: Fish | Bird) { 
    if ('swim' in animal) { 
        return animal.swim()
    }
    return animal()
}
move({
    swim: function () {
        console.log('1111')
        return '1111'
    }
})