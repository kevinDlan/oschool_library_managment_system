import Book from "./book.js";

export default class AudioBook extends Book {
  constructor(title, author, isbn, copies, duration) {
    super(title, author, isbn, copies);
    this.duration = duration; // Durée en heures
  }

  getFormat() {
    return `AudioBook (${this.duration} hours)`;
  }
}