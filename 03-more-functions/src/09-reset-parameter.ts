const args = [8, 5] as const
const angle = Math.atan2(...args)

const arr1: any[] = [1, 2, 3]
const arr2 = ['4', 5, 6]
console.log(arr1.push(...arr2))