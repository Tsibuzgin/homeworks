'use strict';
function my_lastIndexOf(arr, search_elem, from_index) {
    let index;
    if (from_index >= 0) {
        for (let i = from_index; i >=0 ; i--) {
            if (search_elem === arr[i]) {
                index = i;
                break;
            }
        } 
        return index;
    } else {
        for (let j = from_index + arr.length; j >= 0; j--) {
            if (search_elem === arr[j]) {
                index = j;
                break;
            }
        } 
        return index;
    }
}

// let array = [0, 1, 2, 1, 0];
// console.log(my_lastIndexOf(array, 2, array.length-1));

// let array =  ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
// console.log(my_lastIndexOf(array, "Apple", -2));