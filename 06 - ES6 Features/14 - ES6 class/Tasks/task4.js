/*
Task 4: Static Method for Comparing Objects
Create a Book class with title (string), author (string), and pages (number) properties.
Add a static method comparePages(book1, book2) that compares the number of pages between two books and returns the difference.
Create two book objects and use the static comparePages() method to compare their page counts.
*/

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    static comparePages(book1, book2) {
        return book1.pages - book2.pages;
    }
}

const book1 = new Book ('1782', 'George Orwell', 2000);
const book2 = new Book ('Animal Farm', 'George Orwell', 1500);

console.log(Book.comparePages(book1, book2));