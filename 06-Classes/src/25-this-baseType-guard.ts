interface NetWorked {
    host: string
}

// class FileSystemObject {
//     isFile(){
//         return this instanceof FileRep
//     }
//     isDictory(): this is Dictory {
//         return this instanceof Dictory;
//     }
//     isNetWorked(): this is NetWorked & this{
//         return this.networked
//     }
//     constructor(public path:string,private networked: boolean) {

//     }
// }

// class FileRep extends FileSystemObject {
//     constructor(path: string,public content: string) {
//         super(path,false)
//     }
// }

// class  Dictory extends FileSystemObject{
//     children: FileSystemObject[] | undefined
// }

// const fso: FileSystemObject = new FileRep('foo/bar.text', 'foo')
// // const fso: FileSystemObject = new FileSystemObject('foo/bar.text', true)

// if(fso.isFile()) {
//     console.log('fso')
// } else if (fso.isDictory()) {
//    console.log('dectory')
// } else if(fso.isNetWorked()) {
//    console.log('isNetWorked')
// }


class Base<T>{
    value ? : T
    hasValue(): this is {value: T} {
        console.log(this)
        return  this.value !== undefined;
    }
}

const base1 = new Base<string>()
// base1.value = 'base1'

// base1.value

if(base1.hasValue()) {
    base1.value.toUpperCase()
}



