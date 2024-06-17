import Book from "./book.js";

export default class EBook extends Book {
  constructor(title, author, isbn, copies, fileSize) {
    super(title, author, isbn, copies);
    this.fileSize = fileSize; // Taille du fichier en MB
  }

  getFormat() {
    return `EBook (${this.fileSize} MB)`;
  }
}