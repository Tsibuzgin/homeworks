let Operator = String(prompt('What do you want to do (add, sub, mul, div?'));
let Num_1 = Number(prompt('First number?'));
let Num_2 = Number(prompt('Second number?'));
let Result;
switch (Operator) {
    case "add":
        Result = Num_1 + Num_2;
        Symbol = "+";
        break;
    case "sub":
        Result = Num_1 - Num_2;
        Symbol = "-";
        break;
    case "mul":
        Result = Num_1*Num_2;
        Symbol = "*";
        break;
    case "div":
        Result = Num_1/Num_2;
        Symbol = "/";
        break;
    default:
        alert("Wrong operator!");
        break;
}
alert(Num_1 + Symbol + Num_2 + "=" + Result);