type ObjectDescriptor<D,M> = {
    data?: D;
    methods?: M & ThisType<D>
}

function makeObject<D,M>(desc: ObjectDescriptor<D,M>): D & M {
    let data: object = desc.data || {}
    let methods: object= desc.methods || {}
    return {
        ...data,
        ...methods
    }  as D& M
}

let makeObj = makeObject({
    data: {
        x: 0,
        y: 0
    },
    methods:{
        moveBy(dx:number,dy:number){
            this.x += dx
            this.y += dy
        }
    }
})

console.log(makeObj.x)
makeObj.moveBy(5,5)
console.log(makeObj.x)


