function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} `;
    }
}

const myLibrary = [];

function addBookToLibrary(){
    const title = prompt("Title");
    const author =  prompt("author");
    const pages = prompt("pages");
    const read = prompt("Read status");

    myLibrary.push(new Book(title, author, pages, read));
    console.log(myLibrary);
}

for ( let x = 0; x<2; x++){
    addBookToLibrary();
}