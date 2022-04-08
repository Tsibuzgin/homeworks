let numOrStr = prompt('input number or string');
if ((numOrStr === null) || ( numOrStr.trim() === '' ) || ( isNaN( +numOrStr ) )) // Объединение 3 условий в 1
    console.log('Error!') // Сообщение об общей ошибке
else
    console.log('OK!'); // Уведомление о том, что пользователь ввёл допустимое значение