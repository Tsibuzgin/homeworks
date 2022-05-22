'use strict';
var adder = (function () { var res = 0; return function(x) { res += x; return res; } })();

console.log(adder(3));
console.log(adder(5));
console.log(adder(20));