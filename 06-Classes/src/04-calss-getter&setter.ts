class C { 
    _length = 0
    get length() { 
        return this._length
    }
    set length(value) { 
        this._length = value
    }
}

class ReadonlyC { 
    y!: number;
    get() { 
        return this.y
    }
}
const readonlyInstance = new ReadonlyC
readonlyInstance.y = 100
console.log(readonlyInstance)