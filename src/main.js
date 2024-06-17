import AudioBook from "./models/audiobook.js";
import Book from "./models/book.js";
import EBook from "./models/ebook.js";
import Library from "./models/library.js";

// Ebook instance
let ebook = new EBook("1984", "George Orwell", "123456789", 5, 2);

//AudioBook instance
let audioBook = new AudioBook("1984", "George Orwell", "123456789", 3, 15);

//Library instance
let library = new Library();
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084", 3));
library.addBook(new EBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 2, 1.5));
library.addBook(new AudioBook("Moby Dick", "Herman Melville", "9781503280786", 4, 24));

//Add several books of different types to the library.
library.addBook(new Book("1984", "George Orwell", "9780451524965", 5));
library.addBook(new Book("1984", "Jeffrey Bes", "9780451524945", 5));

library.addBook(new EBook("Brave New World", "Aldous Huxley", "9780060851524", 10, 1.0));
library.addBook(new EBook("Brave New Country", "Bill Gate", "9780060850524", 5, 2.0));

library.addBook(new AudioBook("The Hobbit", "J.R.R. Tolkien", "9780547928127", 6, 1.5));
library.addBook(new AudioBook("The Hobbit of King", "Elon Musk", "9780547928227", 6, 1.7));

// Display the list of available books.
console.log("****** List of available books ******");
console.log(library.getBooks());

// Delete a book using its ISBN.
library.removeBook("9780451524945");

// Display updated book list
console.log(library.getBooks());

// Search for a book using its ISBN
let searchBook = library.findBook("9780061120084");

// Display details of the book found.
console.log(`Result of search : ${searchBook}`);

// Display the availability of each book.
console.log(library.bookAvailability());

// Simulate borrowing books by reducing the number of copies available
library.borrowing("9780451524965", 3);

console.log(library.getBooks());





// console.log(ebook.getFormat());
// console.log(audioBook.getFormat());
// console.log(library.listBooks());

