let num = +prompt("Number?");
let exp = +prompt("Exponent?");
function f(a, b) {
    let d = 1;
    if (isNaN(a) || isNaN(b))
    d = 'some error';
    else 
    d = Math.pow(num, exp);
    return d;
}

let ans = (f(num, exp));
alert(ans);