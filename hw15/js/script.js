const num = +prompt("Введите число");
let c = Infinity;

for (let i = 2; i <= num; i++) {
    if ((num % i === 0) && (c > i)) {
        c = i;
    }
}

if (num === 1) c = 1;
if (num < 1) c = "NaN";


console.log(c);