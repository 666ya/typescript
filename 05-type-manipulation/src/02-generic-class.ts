class GenericNumber<NumType> { 
    zeroValue!: NumType;
    add!: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) { 
    return x + y;
};

let myGenericString = new GenericNumber<string>()
myGenericString.zeroValue = ''
myGenericString.add = function (x, y) { 
    return x + y
}

