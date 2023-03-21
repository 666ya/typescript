interface Iomit {
    title: string;
    name: string;
    age: string

}

type TodoOmit = Omit<Iomit,"age" | 'title'>

const todoOmit: TodoOmit = {
    name: '111'
}

