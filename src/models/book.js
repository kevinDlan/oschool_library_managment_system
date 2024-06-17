export default class Book {
  constructor(title, author, isbn, copies) {
    this._title = title;
    this._author = author;
    this._isbn = isbn;
    this._copies = copies;
  }


  getTitle() 
  {
    return this._title;
  }

  setTitle(title)
  {
    if(title !== null && title !== this._title)
        {
            this._title = title;
        }
  }

  getAuthor()
  {
    return this._author;
  }

  setAuthor(author)
  {
    if(author !== null && author !== this._title)
        {
            this._title = author;
        }
  }

  getIsbn()
  {
    return this._isbn;
  }

  setIsbn(isbn)
  {
     if(isbn !== null && isbn !== this._isbn)
        {
            this._isbn = isbn;
        }
  }

  getCopies()
  {
    return this._copies;
  }

  setCopies(copies)
  {
    if(copies !== null && copies !== this._copies)
    {
        this._copies = copies;
    }
  }

  getAvailability() {
    return this._copies > 0 ? "Available" : "Out of stock";
  }
}