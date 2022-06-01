'use strict';
let genUl = function(array) {
    let generateList = function (array, elem) {
        for (let item of array) {
            let liEl = document.createElement("li");
            if (Array.isArray(item)) {
                let UlInner = document.createElement("ul");
                liEl.append(generateList(item, UlInner));
            } else {
                liEl.innerHTML = item;
            }
            elem.append(liEl);
        }
        return elem;
    };
    return generateList(array, document.createElement("ul"));
};

let generatedList = genUl([1, [2, 3, 4], 5]);
document.body.append(generatedList);