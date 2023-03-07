// 错误 因为typeScript不能保存数据不可变
// const args = [8,5]

const args = [8,5] as  const // 正确
const value = Math.atan2(...args)