type Shape = {}

interface PaintOptions { 
    shape: Shape,
    xPos?: number,
    yPos?: number
}
function paintShape(opt: PaintOptions) {                                                                                        
    console.log(opt.shape)
}

const shape: Shape = {}
paintShape({ shape })