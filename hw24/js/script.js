function palindrome_making(number) {
    let pal = false;
    let c;
    for (let i = 0; pal === false; i++) {
        let pal_str = number.toString();
        let arr = [];
        for (let j = 0; j < pal_str.length; j++) {
        arr[j] = pal_str.slice(j, j+1);
        }
        arr.reverse();
        let pal_rev_str = arr.join('');
        let num_rev = Number(pal_rev_str);  
        number = number + num_rev;
        let str = number.toString();
        let k = 0, le = str.length - 1;
        pal = true;
        while (k <= le - k) { pal = pal && (str.charAt (k) == str.charAt (le - k)); k++;}
        c = i + 1;
    }
    let obj = {
        result: number,
        steps: c
    };
    return obj;
}
let a = 96;
console.log(palindrome_making(a));
