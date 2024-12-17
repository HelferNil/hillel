export class Book {
	_book_name;
	_book_author;
	_book_year;

	constructor(book_name, book_author, book_year) {
		this.book_name = book_name;
		this.book_author = book_author;
		this.book_year = book_year;
	}

	set book_name(value) {
		if (typeof value === 'string' && value.length > 0) {
			this._book_name = value;
		} else {
			console.log('Назва книги відсутня!');
			this._book_name = 'без назви';
		}
	}

	get book_name() {
		return this._book_name;
	}

	set book_author(value) {
		if (typeof value === 'string' && value.length > 0) {
			this._book_author = value;
		} else {
			console.log('Автор не вказаний!');
			this._book_author = 'невідомий';
		}
	}

	get book_author() {
		return this._book_author;
	}

	set book_year(value) {
		if (Number.isInteger(value) && value <= new Date().getFullYear()) {
			this._book_year = value;
		} else {
			console.log('Рік видавництва вказанйи невірно!');
			this._book_year = 'не вказано';
		}
	}

	get book_year() {
		return this._book_year;
	}

	printInfo() {
		console.log(`Назва: ${this._book_name}, Автор: ${this._book_author}, Рік: ${this._book_year}.`);
	}

	static oldestBook(arrayOfBooks) {
		let min = 0;
		for (let i = 1; i < arrayOfBooks.length; i++) {
			if (arrayOfBooks[i].book_year < arrayOfBooks[min].book_year) {
				min = i;
			}
		}
		return arrayOfBooks[min];
	}
}
