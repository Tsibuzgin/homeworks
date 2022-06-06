'use strict';
function createTable() {
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (let i = 1; i < 11; i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let td8 = document.createElement('td');
        let td9 = document.createElement('td');
        let td10 = document.createElement('td');
            td1.innerText += ((i - 1)*10 + 1);
            tr.appendChild(td1);
            td2.innerText += ((i - 1)*10 + 2);
            tr.appendChild(td2);
            td3.innerText += ((i - 1)*10 + 3);
            tr.appendChild(td3);
            td4.innerText += ((i - 1)*10 + 4);
            tr.appendChild(td4);
            td5.innerText += ((i - 1)*10 + 5);
            tr.appendChild(td5);
            td6.innerText += ((i - 1)*10 + 6);
            tr.appendChild(td6);
            td7.innerText += ((i - 1)*10 + 7);
            tr.appendChild(td7);
            td8.innerText += ((i - 1)*10 + 8);
            tr.appendChild(td8);
            td9.innerText += ((i - 1)*10 + 9);
            tr.appendChild(td9);
            td10.innerText += ((i - 1)*10 + 10);
            tr.appendChild(td10);
            tbody.appendChild(tr);
                }
                document.body.appendChild(table);
    }

createTable(); 