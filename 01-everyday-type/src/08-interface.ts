/**
 *  interface
 */
interface IObject { 
    width: number
}
//继承
interface IHome { 
    color: string
}
interface IObject extends IHome { 
     height: number
}
// 新增字段
interface IObject { 
    height: number
}

/**
 *  type alias
 */
// type TypeDoor = {
//     width: number
// }
type TypeHome = {
    color: string
}

type TypeDoor = TypeHome & {
    width: number,
    color: string
}



function printWindow(obj: TypeDoor): void { 
    console.log(obj)
}

printWindow({
    width: 100,
    color: 'white'
})
