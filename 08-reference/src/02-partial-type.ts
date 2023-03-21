interface Todo {
    title: string;
    description: string
}

const a: Partial<Todo> = {}
// const b: Todo = {} // 报错