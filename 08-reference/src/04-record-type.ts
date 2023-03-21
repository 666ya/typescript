interface IcatInfo {
    age: number,
    breed: string
}

type CatName = 'miffy' | 'boris' | 'mordred'    

const cats: Record<CatName,IcatInfo> = {
    miffy: {
        age: 10,
        breed: 'Persian'
    },
    boris: {
        age: 10,
        breed: 'Persian'
    },
    mordred: {
        age: 10,
        breed: 'Persian'
    }
}


type RecordType = string
type keys = 1

type S<K extends number,T> = {
    [P in K] : T
}

const record0: S<keys,RecordType> = { 1: 'aaa' }