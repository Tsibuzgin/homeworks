'use strict';
//1
const a = document.querySelector("ul");
let attributes = a.attributes;
let array_attr = Array.from(attributes);
let arr = [];
for (let element of array_attr) {
    arr[array_attr.indexOf(element)] = element.nodeValue;
}
console.log(arr);

//2
let arrAtrName = [];
arrAtrName[0] = a.attributes[0].name;
arrAtrName[1] = a.attributes[1].name;
arrAtrName[2] = a.attributes[2].name;
arrAtrName[3] = a.attributes[3].name;
// console.log(arrAtrName);

//3
let bodyEl = document.body;
let list_arr = bodyEl.childNodes[1].children[9];
list_arr.innerText = "Привет, меня зовут Владимир";

//4
let list_arr_1 = bodyEl.childNodes[1].children[0];
list_arr_1.setAttribute("data-my-name", "Vladymyr"); 

//5
a.removeAttribute('data-dog-tail');