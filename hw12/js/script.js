//1
let x = 1, y = 7;
x > y ? console.log('х больше, чем y') : console.log('х не больше, чем y');
//2
let num = +prompt('Введите число');
if (num % 2 === 0)
    console.log('Число ' + num + ' чётное');
else console.log('Число ' + num + ' нечётное');
//3
let a = +prompt('Введите целое число');
let aStr = a.toString();
let aStrLen = aStr.length;
let sign;
let zero;
if (a < 0) {
    aStrLen --;
    zero = 'отрицательное';
} else if (a > 0)
    zero = 'положительное';
switch (aStrLen) {
    case 1:
        sign = 'однозначное';
        break;
    case 2:
        sign = 'двухзначное';
        break;
    case 3:
        sign = 'трёхзначное и более';
        break;
    default:
        sign = 'трёхзначное и более';
        break;
}
console.log('Число ' + a + ' ' + sign + ' ' + zero);
//4
let num1 = +prompt('Первое число?');
let num2 = +prompt('Второе число?');
let num3 = +prompt('Третье число?');
let comp;
if ((num1 > num2) && (num1 > num3))
    comp = num1;
else if ((num2 > num1) && (num2 > num3))
    comp = num2;
else if ((num3 > num1) && (num3 > num2))
    comp = num3;
console.log(comp + ' наибольшее');
//5
let side1 = +prompt('Первая сторона?');
let side2 = +prompt('Вторая сторона?');
let side3 = +prompt('Третья сторона?');
if ((side1+side2)>side3 && (side1+side3)>side2 && (side2+side3)>side1)
    console.log('Треугольник может существовать');