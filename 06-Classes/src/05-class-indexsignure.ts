class IndexEm { 
    [s: string]: boolean | ((s: string) => boolean)
    x: boolean = false
    check(s: string) { 
        return false as boolean
    }
}