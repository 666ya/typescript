class GettersEm {
     _length = 0
    get length() {
        return 'aaaa'
    }
    set length(value) {
        this.length = value
    }
}

let getterInstance = new GettersEm()

class Thing { 
    _size = 0
    get size(): number { 
        return this._size
    }
    set size(value: any) { 
        // if (!Number.isFinite(value)) { 
        //     this._size = 0
        //     return
        // }
        this._size = value
    }
}
const thingInstance = new Thing()
thingInstance.size = [1,2,3]
console.log(thingInstance.size)
