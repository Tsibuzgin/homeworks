'use strict';
function createTable() {
    for (let i = 1; i < 11; i++) {
        let pre = document.createElement('pre');
        pre.innerText = '';
        if (i === 1) {
            pre.innerText += ' ' + ((i - 1)*10 + 1) + '  ' + ((i - 1)*10 + 2) + '  ' + ((i - 1)*10 + 3) + '  ' + ((i - 1)*10 + 4) + '  ' +
            ((i - 1)*10 + 5) + '  ' + ((i - 1)*10 + 6) + '  ' +
            ((i - 1)*10 + 7) + '  ' + ((i - 1)*10 + 8) + '  ' +
            ((i - 1)*10 + 9) + '  ' + ((i - 1)*10 + 10);
                } else {
                    pre.innerText += ((i - 1)*10 + 1) + ' ' + ((i - 1)*10 + 2) + ' ' + ((i - 1)*10 + 3) + ' ' + ((i - 1)*10 + 4) + ' ' +
                    ((i - 1)*10 + 5) + ' ' + ((i - 1)*10 + 6) + ' ' +
                    ((i - 1)*10 + 7) + ' ' + ((i - 1)*10 + 8) + ' ' +
                    ((i - 1)*10 + 9) + ' ' + ((i - 1)*10 + 10);
                }
        document.body.append(pre);
    }
}

createTable(); 