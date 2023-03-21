type T0 = Exclude<string | number, string>

type T1 = Exclude<'a'| 'b', 'a'>

interface IExclude {
    name: string,
    age: number

}
type T2 = string | number extends string | number ? number : boolean

