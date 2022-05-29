'use strict';
let bodyEl = document.body;
let bodyChilds = bodyEl.childNodes;
let bcArr = Array.from(bodyChilds);
for(let element of bcArr) {
    if (element.innerHTML !== undefined && element.innerHTML !== '') {
        console.log(element.innerHTML);
    }
}