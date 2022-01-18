let unionStr: string | number = 'unionStr'
unionStr = 1000

function printId(id: string | number | number[]) {
    // console.log('your id is '+ id)
    if(typeof id == 'string') {
        console.log(id.toLocaleUpperCase())
    } else {
        console.log(id)
    }
}
printId('101')
printId(202)
printId([1,2])

function welcomePeople(x: string[] | string){
    if(Array.isArray(x)){
        console.log('Hello' + x.join(','))
    } else {
        console.log('welcome' + x)
    }
}

welcomePeople('A')
welcomePeople(['a', 'b'])


function getFirstThree(x: number[] | string) {
    console.log(x.slice(0,3))
}

getFirstThree([1,2,3,4,5,6,7])
getFirstThree('abcdefg')