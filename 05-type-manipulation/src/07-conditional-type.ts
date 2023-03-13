interface Animal { 
    live():void
}
interface Dog extends Animal { 
    woof():void
}

type Example1 = Dog extends Animal ? number : string
type Example2 = Date extends Animal ? number : string

interface IdLabel {
    id: number
}
interface InameLabel {
    name: string
}

function createLabel(id: number):IdLabel;
function createLabel(name: string) : InameLabel;
function createLabel(nameOrId: string | number) : IdLabel | InameLabel;
function createLabel(nameOrId: string | number) : IdLabel | InameLabel{
    throw 'unimplemented';
}

