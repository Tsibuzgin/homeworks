function mainFunction (callback) {
    'use strict';
    let a = +prompt("First number?");
    let b = +prompt("Second number?");
    callback (a, b);
}

//callback-functions
//1.exponentiation
function exponentiation (num1, num2) {
    'use strict';
    let res = Math.pow(num1, num2);
    alert (res);
}

//2.multiply
function multiply (num1, num2) {
    'use strict';
    let res = num1*num2;
    alert (res);
}

//3.division
function division (num1, num2) {
    'use strict';
    let res = num1/num2;
    alert (res);
}

//4.modulo
function modulo (num1, num2) {
    'use strict';
    let res = num1%num2;
    alert (res);
}

mainFunction (multiply);