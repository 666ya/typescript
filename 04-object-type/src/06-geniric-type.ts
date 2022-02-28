interface Box<Type> { 
    contents: Type
}

let box: Box<string> = { contents: 'string' }

interface Apple { 
    name: string
}


type AppleBox = Box<Apple>

const apple: AppleBox = {
    contents: {
        name: 'aaa'
    }
}