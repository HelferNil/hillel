// Завдання 2

// Створіть функцію яка приймає один параметр: age.
// Усередині функції перевірте, чи age більше або рівне 18.
// Якщо age відповідає умові, поверніть true, інакше поверніть false.
// Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою) в консоль для кожного випадку.


const isAdult = age => age >= 18;
console.log(isAdult(25), isAdult(15));
console.log("=========================");


//Викличте вашу функцію з аргументами 25 і 15 - отут не поняв, послідовно чи одночасно, зробив і так, і так
function isAdultExtended(...arguments){
    for (let i = 0; i < arguments.length; i++){
        console.log(arguments[i]<= 18);
    }
}

isAdultExtended(0, 15, 18, 25);