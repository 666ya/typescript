"use strict";
function loginValue(s) {
    if (s instanceof Date) {
        console.log(s.toUTCString());
    }
    else {
        console.log(s.toLocaleUpperCase());
    }
}
