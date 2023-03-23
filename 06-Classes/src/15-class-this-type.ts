class Box {
    contents:string = ''
    set(value: string) {
        this.contents = value
        return  this;
    }
    sameAs(other: this) {
        return other.contents === this.contents
    }
}

class ClearableBox extends Box {
    othetContents:string = "?"
    clear(){
        this.contents = ''
    }
}


const base = new Box()
const derived = new ClearableBox()
const derived1 = new ClearableBox()
derived.sameAs(derived1)