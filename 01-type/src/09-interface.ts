interface InterfacePoint {
    x: number,
    y: number
}

function printCoordInterface(pt: InterfacePoint){

}
printCoordInterface({
    x: 101,
    y: 202
})


// 扩展接口
// interface Animal  {
//     name: string
// }
// interface Bear extends Animal {
//     sex: string
// }

// const bear: Bear = {
//     name: 'winie',
//     sex: 'male'
// }
// console.log(bear.name)
// console.log(bear.sex)

// type Animal = {
//     name: string
// }

// type Bear = Animal & {
//     sex: string
// }
// const bear: Bear = {
//     name: 'winie',
//     sex: 'male'
// }


// 向现有的类型添加字段
// interface Mywindow {
//     count: number
// }
// interface Mywindow {
//     title: string
// }

// const windows: Mywindow = {
//     count: 2,
//     title: 'Hellp ts'
// }

// 类型创建以后是不能扩展的
type Mywindow = {
    title: string
}
// type Mywindow = {
//     count: number
// }