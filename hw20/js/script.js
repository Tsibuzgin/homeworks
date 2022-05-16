
//1
// let arr1 = [1,2,3];
// let arr2 = [4,5];
// let sum_arr = arr1.concat(arr2);
// console.log(sum_arr);
//2
// let arr = [1,2,3];
// arr.reverse();
// console.log(arr);
//3
// let arr = [1,2,3];
// arr.push(4,5,6);
// console.log(arr);
//4
// let arr = [1,2,3];
// arr.unshift(4,5,6);
// console.log(arr);
//5
// let arr = ['js','css','jq'];
// alert(arr.shift());
//6
// let arr = ['js','css','jq'];
// alert(arr.pop());
//7
// let arr = [1,2,3,4,5];
// let arr2 = arr.slice(0,3);
// console.log(arr2);
//8
// let arr = [1,2,3,4,5];
// let arr2 = arr.slice(-2);
// console.log(arr2);
//9
// let arr = [1,2,3,4,5];
// arr.splice(1,2);
// console.log(arr);
//10
// let arr = [1,2,3,4,5];
// let arr2 = arr.slice(1,4);
// console.log(arr2);
//11
// let arr = [1,2,3,4,5];
// arr.splice(3,0,"a","b","c");
// console.log(arr);
//12
// let arr = [1,2,3,4,5];
// arr.splice(1,0,"a","b");
// arr.splice(6,0,"c");
// arr.splice(8,0,"e");
// console.log(arr);
//13
// let arr = [3, 4, 1, 2, 7];
// function compareNumeric(a, b) {
    // 'use strict';
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   }
// arr.sort(compareNumeric);
// console.log(arr);
//14
// let arr = [5, 6, 7, 8, 9];
// let res = arr.reduce((sum, current) => sum + current, 0);
// console.log(res);
//15
// let arr = [5, 6, 7, 8, 9];
// let arr_s = arr.map(item => Math.pow(item,2));
// let res = arr_s.reduce((sum, current) => sum + current, 0);
// console.log(res);
//16
// let arr = [1, -3, 5, 6, -7, 8, 9, -11];
// for (let i=0; i <= arr.length - 1 ; i++) {
//     {if (arr[i] >= 0) {
//         arr.splice(i,1);
//         i--;
//     }} 
// }
// console.log(arr);
//17
// let arr =  [1, -3, 5, 6, -7, 8, 9, -11];
// for (let i=0; i <= arr.length - 1; i++) {
//     {if (arr[i]%2 !== 0) {
//         arr.splice(i,1);
//         i--;
//     }} 
// }
// console.log(arr);
//18
// let arr =  ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// for (let i=0; i <= arr.length - 1; i++) {
//     {if (arr[i].length <= 5) {
//         arr.splice(i,1);
//         i--;
//     }} 
// }
// console.log(arr);
//19
// let arr = [1, 2, [3, 4], 5, [6, 7]];
// for (let i=0; i <= arr.length - 1; i++) {
//     {if (typeof arr[i] === "number") {
//         arr.splice(i,1);
//         i--;
//     }} 
// }
// console.log(arr);
//20
let arr = [5, -3, 6, -5, 0, -7, 8, 9];
let counter = 0;
for (let i=0; i <= arr.length - 1; i++) {
    {if (arr[i] < 0) {
        counter ++;
    }} 
}
console.log(counter);