'use strict';
void function () {
    let inc = 0;
    let dec = 0;
    let val = 0;
    const counter = function (number = 0) {
        return {
            increase() {
                number++;
                inc++;
            },
            decrease() {
                number--;
                dec++;
            },
            value() {
                val++;
                return number;
            },
            getStatistic() {
                let obj = {
                    inc_t: inc,
                    dec_t: dec,
                    val_t: val
                };
                return obj;
            },
            reset() {
                number = 0;
            }
        };
    };
    let counterInstance = counter();
    counterInstance.increase();
    counterInstance.increase();
    counterInstance.decrease();
    console.log(counterInstance.value());
    console.log(inc);
    console.log(dec);
    console.log(val);
    console.log(counterInstance.getStatistic());
    counterInstance.reset();
    console.log(counterInstance.value());

    let counterInstance2 = counter();
    console.log(counterInstance2.value());
}();