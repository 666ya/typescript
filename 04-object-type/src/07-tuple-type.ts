type StringNumberPair = [string,number]

const tupleValue:StringNumberPair = ['11',2]
// tupleValue.push('3')
// tupleValue[2] = 3

// 可解构
const [inputString, inputNumner] = tupleValue

type Either2dOr3d = [number,number,number?]
const eitherValue: Either2dOr3d = [1,2]
const last = eitherValue[2]
console.log(eitherValue.length)


type StringNumberBooleans = [string,number,...boolean[]]
type StringBooleansNumber = [string,...boolean[],number]
type BooleansStringNumber = [...boolean[],string,number]

const a: StringBooleansNumber = ['hello',1]
console.log(a.length)


function readButtonInput(...[name,version,...input]: [string,number,...boolean[]]) {
    console.log(name)
    // const [name,version,...input] = args
}
readButtonInput('111',2,false)