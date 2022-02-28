function makeDate(timestamp: number): void
function makeDate(m: number, day: number, year: number): void
function makeDate(mOrTimestamp: number, d?: number, y?: number) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d)
    } else { 
        return new Date(mOrTimestamp)
    }
}
 
const d1 = makeDate(12345678)
const d2 = makeDate(5, 5, 5)
// const d3 = makeDate(1234567810123,3)
console.log(d1)
console.log(d2)
// console.log(d3)