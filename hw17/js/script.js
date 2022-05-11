function padString(str, len, sym, side) {
    let res;
    if (len < str.length) {
        res = str.substring(0, len);
    } else {
        if (len === str.length) {
            res = str;
        } else {
            let dif = len - str.length;
            if (side === false) {
            res = '';
            for (let i=1; i <= dif; i++) {
                res = res + sym;
            }
            res = res + str;
            } else {
            res = str;
            for (let i=1; i <= dif; i++) {
                res = res + sym; 
            }
        }
    }
}
return res;}

console.log(padString('hello', 5, '*', false));