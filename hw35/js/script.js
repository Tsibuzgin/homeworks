'use strict';

void function() {
    const formSelector = '#form';
    const submitHandler = (event) => {
        event.preventDefault();

        const inputs = event.target.querySelectorAll('input, textarea, select');
        const data = {};
        
        for(const input of inputs) {
            data[input.name] = input.value;
        }

        const dataString = JSON.stringify(data);
        localStorage.setItem(formSelector, dataString);

        let array = Array.from(inputs);
        console.log(array);

        let values = [];
        for (let value of array) {
            values[array.indexOf(value)] = array[array.indexOf(value)].value;
        }

        if (values.includes('')) {
            alert('You have not entered all the data.');
        }
    };

    document
        .querySelector(formSelector)
        .addEventListener('submit', submitHandler);

}();