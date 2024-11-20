// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості
//(наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть
//всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

users = [
  {
    name: "Big Ben",
    age: 23,
    "phonk number": "Do-do-doo-123",
    "eyes color": "red",
  },
  {
    name: "Tarasiuk Ivanenko",
    age: 55,
    "phonk number": "23-32-222-666",
    "eyes color": "green",
  },
  {
    name: "Zhadan Petro",
    age: 5,
    "phonk number": null,
    "eyes color": "sky blue",
  },
];

for (user of users) {
  const {
    name,
    age,
    "phonk number": phonk_number,
    "eyes color": eyes_color,
  } = user;
  
  console.log(
    `User name: ${name}. User age: ${age}. Phone number: ${phonk_number}. Eyes color: ${eyes_color}.`
  );
}
