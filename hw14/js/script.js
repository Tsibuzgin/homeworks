const num = +prompt("Введите число");
let c = true;

for (let i = 2; i <= num-1; i++) {
    if (num % i === 0) {
        c = false;
        break;
    }
}

console.log(c);