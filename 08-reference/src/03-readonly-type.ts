interface TodoTitle {
    title: string
}

const todo: Readonly<TodoTitle> = {
    title: '只读属性'
}
// todo.title = 'hello'  //报错