'use strict';

export function task_02() {

    // Напиши скрипт подсчета стоимости гравировки украшений. Для этого 
    // создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку 
    // (в строке будут только слова и пробелы) и цену гравировки одного слова, 
    // и возвращающую цену гравировки.

    const calculateEngravingPrice = (message, pricePerWord) => {

        const words = message.split(' ');
        const total = words.length * pricePerWord;
        return total;

    }

    console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10, )); // 80

    console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20, )); // 160

    console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

    console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100

}