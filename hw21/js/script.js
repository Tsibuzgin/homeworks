//1
// let arr = ['a','b','c','d'];
// alert(arr[0]+'+'+arr[1]+','+arr[2]+'+'+arr[3]);
//2
// let arr = [2,5,3,9];
// result = arr[0]*arr[1]+arr[2]*arr[3];
// alert(result);
//3
// let arr = [[1,2,3],[4,5,6],[7,8,9]];
// alert(arr[1][0]);
//4
// let obj =  {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
// alert(obj.js[0]);
//5
// function sym(i) {
//     'use strict'
//     let s = '';
//     for (let j=1; j <= i; j++) {
//         s = s + 'x';
//     }
//     return s;
// }
// let arr = [];
// for (let k = 1; k <= 6; k++) {
//     arr[k-1] = sym(k);
// }
// console.log(arr);
//6
// function sym(i) {
//     'use strict'
//     let s = '';
//     for (let j=1; j <= i; j++) {
//         s = s + '' + i;
//     }
//     return s;
//     }
//     let arr = [];
//     for (let k = 1; k <= 6; k++) {
//         arr[k-1] = sym(k);
//     } 
//     console.log(arr);
//7
// function arrayFill(val, quan) {
//     'use strict';
//     let arr = [];
//     for (let i=0; i <= quan; i++) {
//         arr[i] = val;
//     }
//     return arr;
// };
// console.log(arrayFill('x',3));
//8
// let arr = [1,2,3,0,0,0,6];
// let s = 0;
// let j;
// for (let i = 0; s <= 10; i++) {
//     s = s + arr[i];
//     j = i + 1; 
// }
// console.log(j);
//9
// let arr = [1,2,3,0,0,8,0,6,7];
// let arr2 = [];
// for (let i = 0; i <= arr.length - 1; i++) {
//     arr2[i] = arr[arr.length - (i + 1)];
// }
// console.log(arr2);
//10
// let arr =  [[1, 2, 3], [4, 5], [6]];
// let res = [];
// for (let i = 0; i <= arr.length - 1; i++) {
//     res[i] = arr[i].reduce((sum, current) => sum + current, 0);
// }
// let sum = res.reduce((sum, current) => sum + current, 0);
// console.log(sum);
//11
let arr =  [[[1, 2], [3, 4]], [[5, 6], [7, 8, 9]]];
//sum of elements of subarray arr
let res1 = [];
//sum of subarray elements of subarray arr
let res2 = [];
for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr[i].length - 1; j++) {
        res2[j] = arr[i][j].reduce((sum, current) => sum + current, 0);
    }
    res1[i] = res2.reduce((sum, current) => sum + current, 0);
}
let sum = res1.reduce((sum, current) => sum + current, 0);
console.log(sum);