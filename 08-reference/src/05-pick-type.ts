interface TodoPick {
    title: string
    description: string;
    completed: boolean
}


type TodoPreview = Pick<TodoPick,"completed">

const todoP: TodoPreview = {
    completed: true
}



