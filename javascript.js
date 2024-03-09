const myLibrary = [];

const library = document.querySelector('div#library');

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function clearLibrary() {
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
}

function addbook() {
    const p = document.createElement('p');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete this Entry';
    deleteButton.classList.toggle('deleteButton');
    deleteButton.setAttribute('id', `${this.title}`);
    
    p.textContent = `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.read}`;
    p.setAttribute('id', `${this.title}`);
    p.appendChild(deleteButton);
if (library.firstChild) {
        library.insertBefore(p, library.firstChild);
    } else {
    library.appendChild(p);
}
}


function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function displayBooks() {
    clearLibrary();
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

library.addEventListener('click', function (e) {
    if (e.target.classList.contains('deleteButton')) {
        e.target.parentNode.remove();
    }
    
    
});