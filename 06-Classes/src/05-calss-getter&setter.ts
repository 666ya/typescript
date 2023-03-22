class Accessor1{
    _length = 0
    get length(){
        return this._length
    }
    set length(value) {
        this.length = value
    }
}


// 只读
class AccessorReadonly {
    _length = 0
    get length(){
        return this._length
    }
}
const accessReadonly = new AccessorReadonly()
// accessReadonly.length = 2  //报错


// set parameter type推断
class Accessor2 {
    _name: string = 'world'
    get name(){
        return this._name
    }
    set name(value){
        this._name = this.name
    }
}
// get和 set需要保持一致的访问性
class Accessor3 {
    _name:string = 'world'
    protected get name(){
        return this._name
    }
    protected set name(value){
        this._name = value
    }
    // set name(value){
    //     this._name = this.name
    // }
}
