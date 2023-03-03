function printAll(str: string | string[] | null) {
    if(typeof str == 'string'){
        console.log(str)
    }
}

printAll('all')