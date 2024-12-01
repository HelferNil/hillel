import { Book } from "./Book.js";
export class Ebook extends Book {
  _book_format;
  constructor(book_name, book_author, book_year, book_format) {
    super(book_name, book_author, book_year);
    this.book_format = book_format;
  }

  set book_format(value) {
    if (typeof value === "string" && value.length > 0) {
      this._book_format = value;
    } else {
      console.log("Формат не вказано!");
    }
  }

  get book_format() {
    return this._book_format;
  }

  printInfo() {
    console.log(`Назва: ${this._book_name}, Автор: ${this._book_author}, 
        Рік: ${this._book_year}, Формат файлу: ${this._book_format}`);
  }

static digitalization(paperBook, format) {
let newEbook = new Ebook ({...paperBook});
newEbook._book_format = format;
return(newEbook);
}
}





//Debug:
// const ebook1 = new Ebook("Володар перців", "Мартін Лютий Кінг", 1982, "PDF");
// ebook1.printInfo();
// console.log(ebook1.book_format)

// const book = new Book("Володар перців","Рікі Мартін Кінг", 1980);
// const format = "txt";
//let eBook1 =  Ebook.digitalization(book, format);
//console.log("Нова книга: "  + eBook1);