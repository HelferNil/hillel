// Завдання 1

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

function squareOfSquare1(height, width) {
	return height * width;
}

const squareOfSquare2 = function (height, width) {
	return height * width;
};

const squareOfSquare3 = (height, width) => height * width;

console.log(squareOfSquare1(2, 3));
console.log(squareOfSquare2(4, 5));
console.log(squareOfSquare3(6, 7));
