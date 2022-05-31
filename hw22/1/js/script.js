// 1.function indexOf(arr, searchElement, fromIndex)
let arr = [1,2,3,4,5,6];
function indOf (arr, searching_value, from_index) {
    let q;
    for (let i = from_index; i <= arr.length; i++) {
        if (searching_value === arr[i]) { q = i; break; } else {
        q = -1;
    }
} return q;}

console.log(indOf(arr, 3, 4));