let num = +prompt("Number?");
let exp = +prompt("Exponent?");
function f(a, b) {
    let d = 1;
    if (typeof a === NaN || typeof b === NaN)
    d = 'some error';
    else 
    d = Math.pow(num, exp);
    return d;
}

console.log(f(num, exp));