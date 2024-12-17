// Завдання 1: Відстеження кількості позитивних, негативних та нульових чисел

// Ваше завдання - написати програму для обчислення кількості позитивних, негативних та нульових чисел у заданому масиві чисел.

// Створіть масив чисел за допомогою конструкції const numbers = [2, -5, 0, 7, -3, 0, 10, -8].
// Задайте змінні positiveCount, negativeCount та zeroCount зі значенням 0. Вони будуть використовуватись для відстеження кількості позитивних, негативних та нульових чисел в масиві.
// Використовуючи цикл for, пройдіться по кожному елементу масиву numbers.
// Перевірте чи число позитивне, негативне чи нульове, та збільште відповідну змінну (positiveCount, negativeCount або zeroCount) на 1.
// Після завершення циклу виведіть значення змінних positiveCount, negativeCount та zeroCount на консоль.

const numbers = [2, -5, 0, 7, -3, 0, 10, -8, 5, -3, 0, 222];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (i = 0; i <= numbers.length; i++) {
	if (Number(numbers[i]) > 0) {
		positiveCount++;
	}
	if (Number(numbers[i]) < 0) {
		negativeCount++;
	}
	if (Number(numbers[i]) == 0) {
		zeroCount++;
	}
}
console.log(
	`Позитивних чисел ${positiveCount}, негативних чисел ${negativeCount} та нулів ${zeroCount} у масиві ${numbers}`,
);
