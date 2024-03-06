const myLibrary = [];

const library = document.querySelector('div#library');

function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
}

function addbook() {
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
    const p = document.createElement('p');
    p.textContent = `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.read}`;
    library.appendChild(p);
}


function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function displayBooks() {
    myLibrary.forEach((book) => {
        addbook.call(book);
    })
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