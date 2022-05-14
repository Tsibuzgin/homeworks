let arr = [-1,-2,-3,1,2,3];
function posArr(a) {
    "use strict";
    const exampleArr = [];
    for (let i = 0; i <= a.length; i++) {
        if (a[i] > 0) {
            exampleArr.push(arr[i]);
        }
    }
    if (exampleArr.length !== 0) {
        return exampleArr;
    } else {
        return null;
    }
}
console.log(posArr(arr));