// Этот же скрипт с использованием switch
let numOrStr = prompt('input number or string');
switch(numOrStr) {
    case null:
        console.log('Error!');
        break;
    default:
    {
        switch(numOrStr.trim()) {
            case '':
                console.log('Error!');
                break;
            default:
            {
                switch(isNaN(+numOrStr)) {
                    case true:
                        console.log('Error!');
                        break;
                    default:
                        console.log('OK!');
                }
            }
        }
    }
}