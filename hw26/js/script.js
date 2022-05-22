'use strict';
function makeRand(num) {
        var usedNumbers = [num--];
        !function f() {
            var i = Math.round(Math.random() * usedNumbers.length);
            usedNumbers.splice(i,0,num--);
            num && f();
        }();
        return usedNumbers;
    }
    var arr = makeRand(100);
    console.log(arr);