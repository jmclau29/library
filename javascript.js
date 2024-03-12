const myLibrary = [];
const library = document.querySelector('div#library');

//this constructor creates new Book objects, which are later added to the myLibrary array.
function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
}

//the following functions deal with adding and removing Book objects to and from the array.
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function removeBookFromLibrary(deletedBook) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (deletedBook === myLibrary[i].title) {
            myLibrary.splice(i, 1);
        }
    }
}

//this function clears the content of the library div in the index.html file.
function clearLibrary() {
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
}

//this function dynamically adds a new <p> element to the library div, containing the information for one of the myLibrary objects.
function generateBook() {
    const p = document.createElement('p');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete this Entry';
    deleteButton.classList.toggle('deleteButton');
    deleteButton.setAttribute('id', `${this.title}`);

    p.textContent = `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.read}`;
    p.classList.toggle('bookEntry');
    p.setAttribute('id', `${this.title}`);

    p.appendChild(deleteButton);
    if (library.firstChild) {
        library.insertBefore(p, library.firstChild);
    } else {
        library.appendChild(p);
    }
}

//this function clears the library div with clearLibrary(), then populates it with the information from the myLibrary array objects.
function displayBooks() {
    clearLibrary();
    for (let i = 0; i < myLibrary.length; i++) {
        generateBook.call(myLibrary[i], i);
    }
}

const dialog = document.querySelector('dialog');
const newBookButton = document.querySelector('dialog + button');
const closeButton = document.querySelector('dialog button');

//event Listener to display the book entry modal.
newBookButton.addEventListener('click', () => {
    dialog.showModal();
});

//event Listener to get the information from the modal, add it to myLibrary, display it, and then close the modal.
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

//event Listener to delete an entry from myLibrary and then remove it from the display.
library.addEventListener('click', function (e) {
    if (e.target.classList.contains('deleteButton')) {
        let bookTitle = e.target.getAttribute('id');
        removeBookFromLibrary(bookTitle);
        e.target.parentNode.remove();
    }
    
});

//Add a button on each book's display to change its read status.
//Create a function that toggles a book's read status on the Book prototype instance.

//prototype function AKA object method to toggle read status in the object.
Book.prototype.toggleRead = function() {
    if (this.read === 'Read') {
        this.read = 'Not Read';
    } else {
        this.read = 'Read';
    }
}