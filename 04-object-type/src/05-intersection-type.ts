interface Color { 
    color: string
}

interface Shape { 
    shape: string
}
type Origin = {
    origin?: string
}
type Flowers = Color & Shape & {
    name: string
} & Origin & {}
const flowrs: Flowers = {
    name: 'meigui',
    color: 'red',
    shape: 'circle'
}