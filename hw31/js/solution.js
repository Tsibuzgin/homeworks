'use strict';
//1
let bodyEl = document.body;
let bodyChilds = bodyEl.childNodes;
let bcArr = Array.from(bodyChilds);
for(let element of bcArr) {
    if (element.innerHTML !== undefined && element.innerHTML !== '') {
        console.log(element.innerHTML);
    }
}

//2
// let bodyEl = document.body;
// let bodyChilds = bodyEl.childNodes;
// console.log(bodyEl.childNodes[1].children.length);

//3
// let bodyEl = document.body;
// let bodyChilds = bodyEl.childNodes;
// let list_arr = bodyEl.childNodes[1].children;
// let Arr = Array.from(list_arr);
// for(let element of Arr) {
//     console.log(element.innerText);
// }