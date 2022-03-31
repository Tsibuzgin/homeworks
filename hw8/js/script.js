// Task#1

let a = Boolean(Number('10'))+1;
console.log(a);
//2
let b = 'sub' +Number(false);
console.log(b);
//sub0
let c = 16 * '   91  ';
console.log(c);
//1456
let d = true-70;
console.log(d);
//-69
let e = Number(1 + String(1)) + 1;
console.log(e);
//12

// Task#2

let hoursNumber = prompt('Hours number?');
let secondsNumber = hoursNumber*3600; //Вычисляем количество секунд
alert('Number of seconds is ' + secondsNumber);

// Task#3

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num ++;
num --;
alert(num);