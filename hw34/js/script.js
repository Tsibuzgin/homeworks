'use strict';
function createTable() {
    for (let i = 1; i < 11; i++) {
        let pre = document.createElement('pre');
        let p = document.createElement('p');
        pre.innerText = '';
        p.innerText = '';
        for (let j = 10*(i-1) + 1; j < 10*(i-1) + 11; j++) {
            if (i === 1) {
                pre.innerText +=  j.toString() + '  ';
            } else {
                p.innerText += ' ' + j.toString();
            }
        }
        document.body.append(pre);
        document.body.append(p);
    }
}

createTable(); 