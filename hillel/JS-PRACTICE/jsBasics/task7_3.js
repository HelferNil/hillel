// Завдання 3

// Створіть функцію divide, яка приймає два параметри: numerator і denominator
// та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі,
// якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок,
// коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally,
// виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

function divide(numerator, denominator) {
	return function () {
		console.log('===========================');
		if (denominator == 0 || isNaN(numerator) || isNaN(denominator)) {
			throw new Error('Косяк з параметрами, перевірте вхідні данні!');
		}
		return numerator / denominator;
	};
}

try {
	const functionResult = divide(4, 'fdfdf');
	const result = functionResult();
	console.log(result);
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Виконання завершено!');
}

try {
	const functionResult = divide(4, 0);
	const result = functionResult();
	console.log(result);
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Виконання завершено!');
}

try {
	const functionResult = divide(4, 8);
	const result = functionResult();
	console.log(result);
} catch (error) {
	console.log(error.message);
} finally {
	console.log('Виконання завершено!');
}
