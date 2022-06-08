'use strict';
let form = localStorage.getItem('#form');
let copy = JSON.parse(form);
let UlInner = document.createElement("ul");
let val_arr = Object.values(copy);
let li_arr = [];
for (let value of val_arr) {
    li_arr[val_arr.indexOf(value)] = document.createElement("li");
    li_arr[val_arr.indexOf(value)].innerText = val_arr[val_arr.indexOf(value)];
    UlInner.append(li_arr[val_arr.indexOf(value)]);
}
document.body.append(UlInner);