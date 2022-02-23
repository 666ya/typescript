function loginValue(s: string | Date) { 
    if (s instanceof Date) { 
        console.log(s.toUTCString())
    } else {
        console.log(s.toLocaleUpperCase())
    }
}