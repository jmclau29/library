const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(newBook) {

    myLibrary.push(newBook);
}

function displayBooks() {
    for (book in myLibrary) {
        const display = document.querySelector('div#library');
        const p = document.createElement('p');
        p.textContent = `Name: ${this.name} | Author: ${this.author} | Pages: ${this.pages} | Read: ${this.read}`;
        display.appendChild(p);
    }
}

const dialog = document.querySelector('dialog');
const newBookButton = document.querySelector('dialog + button');
const closeButton = document.querySelector('dialog button');

newBookButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;
    
    newBook = new Book(title, author, pages, read);
    
    addBookToLibrary(newBook);
    console.log(myLibrary);

    displayBooks();

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';

    dialog.close();
});