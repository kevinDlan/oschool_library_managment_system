import Book from "../src/models/book.js";
import Library from "../src/models/library.js";
import EBook from "../src/models/ebook.js";
import AudioBook from "../src/models/audiobook.js";


test('Test initial library has zero book', () => 
    {
        const library = new Library();
        expect(library.getBooks().length).toBe(0);
    });

test('Test add book method add book in library', ()=>
    {
        const library = new Library();
        const book = new Book("Clean Architecture","Dave Thompson","3456788", 5);
        library.addBook(book);

        expect(library.getBooks()[0]).toEqual(book);
    });

test('Test remove book method remove book in library', ()=>
    {
        const library = new Library();
        const book = new Book("Clean Architecture","Dave Thompson","3456788", 5);
        library.addBook(book);
        expect(library.getBooks()[0]).toEqual(book);
        library.removeBook(book.getIsbn());
        expect(library.getBooks().length).toBe(0)
    });

test('Test find book with isbn method in library', () => 
    {
        const library = new Library();
        const book = new Book("Poor Dad, Rich Dad", "Robert Kio","6267087",10);
        const ebook = new EBook("Poor Dad, Rich Dad", "Robert Kio","6267187",10,1);
        const audioBook = new AudioBook("Poor Dad, Rich Dad", "Robert Kio","6267287",10,1,5);

        library.addAll([book, ebook, audioBook]);

        const searchBook = library.findBook(ebook.getIsbn());
        const undefinedBook = library.findBook('45677708');
        expect(searchBook).toEqual(ebook);
        expect(undefinedBook).toEqual(undefined);

    });
