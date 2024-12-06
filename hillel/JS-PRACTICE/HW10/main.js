import { Book } from "./Book.js";
import { Ebook } from "./Ebook.js";

//Конструктори
// const book = new Book("Володар перців", "Рікі Мартін Кінг", 1980);
// console.log(book);
// book.printInfo();

// const ebook = new Ebook(
//   "Матриця 4. Перенедозавантаження",
//   "Нейромережа INC",
//   2024,
//   "FB2"
// );
// console.log(ebook);
// ebook.printInfo();

const books = [
  {
    book_name: "Чарлі у шоколадній фабриці",
    book_author: "Генрі Форд",
    book_year: 1980,
  },
  {
    book_name: "По кому лзвонить коллектор",
    book_author: "ЛохКапіталБанк",
    book_year: 2003,
  },
  {
    book_name: "Хто випустив собаку?",
    book_author: "DMX",
    book_year: 1922,
  },
  {
    book_name: "Чи сняться кіберчеченцям кібервівці? ",
    book_author: "Еротична серія",
    book_year: 2022,
    book_format: "fb2",
  },
  {
    book_name: "Термодинаміка для чайників",
    book_author: "Ошпаренко Геннадій Геннадійович",
    book_year: 1402,
    book_format: "pdf",
  },
];
const oldest = Book.oldestBook(books);
console.log("Найстаріша книга:", oldest);

const book1 = new Book("Володар перців", "Рікі Мартін Кінг", 1980);
const format = "txt";
let ebook1 = Ebook.digitalization(book1, format);
ebook1.printInfo();
//Перевірка на класс, має бути true
//console.log(ebook1.constructor === Ebook);
// 