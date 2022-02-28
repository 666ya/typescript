interface Color { 
    color: string
}

interface Shape { 
    shape: string
}
interface Flower extends Color, Shape { 
    name: string
}
const flower: Flower = {
    name: 'meigui',
    color: 'red',
    shape: 'circle'
}