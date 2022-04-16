"use strict";

let year = prompt('Твой год рождения?');
if (year !== null) {
    let year_n = +year;
    let age = 2022-year_n;
    let city = prompt('В каком городе ты живёшь?');
    if (city !== null) {
        let sport = prompt('Твой любимый вид спорта?');
        if (sport !== null) {
            let A='Твой возраст ' + age;
            let U;
            switch(city) {
                case 'Киев':
                    U='Ты живёшь в столице Украины.';
                    break;
                case 'Москва':
                    U='Ты живёшь в столице РФ.';
                    break;
                case 'Минск':
                    U='Ты живёшь в столице Белоруссии.';
                    break;
                default: U='Ты живёшь в городе ' + city;
            }
            switch(sport) {
                case 'Шахматы':
                    alert(A +'\n'+ U+'\n'+'Круто! Хочешь стать Алёхиным!');
                    break;
                case 'Бокс':
                    alert(A +'\n'+ U+'\n'+'Круто! Хочешь стать Кличко!');
                    break;
                case 'Футбол':
                    alert(A +'\n'+ U+'\n'+'Круто! Хочешь стать Шевченко!');
                    break;
                default:
                    alert(A +'\n'+ U);
                    break;
            }
        } else {alert('Жаль, что Вы не захотели вводить свой вид спорта.');}
    } else {alert('Жаль, что Вы не захотели вводить свой город.');}
} else {alert('Жаль, что Вы не захотели вводить свой год рождения.');}
