'use strict';
let bodyEl = document.body;
let bodyChilds = bodyEl.childNodes;
let list_arr = bodyEl.childNodes[1].children;
let Arr = Array.from(list_arr);
for(let element of Arr) {
    console.log(element.innerText);
}