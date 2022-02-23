"use strict";
function swim() {
    console.log('swim');
}
function move(animal) {
    if ('swim' in animal) {
        return animal.swim();
    }
    return animal();
}
move({
    swim: function () {
        console.log('1111');
        return '1111';
    }
});
