class Visible { 
    public greet() { 
        console.log('hi')
        this.getName()
    }
    protected getName() { 
        console.log('protected')
    }
}
const greet = new Visible()
greet.greet()
// greet.getName()  //error

class SubVisible extends Visible {
    getName() { 
        console.log('aaa')
    }
}
const subInstance = new SubVisible()
subInstance.getName()