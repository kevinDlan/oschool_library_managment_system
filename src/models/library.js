export default class Library {
  constructor() {
    this._books = [];
  }

  addBook(book) {
    this._books.push(book);
  }

  addAll(books)
  {
    if(Array.isArray(books) && books.length> 0)
      {
        this._books = [...this._books, ...books];
      }
  }

  removeBook(isbn) {
    this._books = this._books.filter(book => book.getIsbn() !== isbn);
    console.log(`The book with the isbn: ${isbn} has been successfully removed.`);
  }

  findBook(isbn) {
    return this._books.find(book => book.getIsbn() === isbn);
  }

    listBooks() {
    return this._books.map(book => `${book.getTitle()} by ${book.getAuthor()}`);
  }

  bookAvailability()
  {
    return this._books.map(book => `${book.getTitle()} is ${book.getAvailability()}`);
  }


  borrowing(isbn, qty = 1)
  {
      let borrowBook = this.findBook(isbn);
      borrowBook.setCopies(borrowBook.getCopies() - qty);
      this._books = this._books.filter(book => book.isbn !== isbn);
      this._books.push(borrowBook);
  }

  getBooks()
  {
    return this._books;
  }
}