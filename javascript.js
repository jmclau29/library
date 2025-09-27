const myLibrary = [];
const library = document.querySelector('div#library');

//this constructor creates new Book objects, which are later added to the myLibrary array.
class Book {
    constructor(title, author, pages, read) {
        this.title = title,
            this.author = author,
            this.pages = pages,
            this.read = read;
    }
    //Add a button on each book's display to change its read status.
    //Create a function that toggles a book's read status on the Book prototype instance.
    //prototype function AKA object method to toggle read status in the object.
    toggleRead() {
        if (this.read === 'Read') {
            this.read = 'Not Read';
        } else {
            this.read = 'Read';
        }
    }
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
    const toggleReadButton = document.createElement('button');
    deleteButton.textContent = 'Delete this Entry';
    deleteButton.classList.toggle('deleteButton');
    deleteButton.setAttribute('id', `${this.title}`);
    toggleReadButton.textContent = 'Toggle Read/Unread';
    toggleReadButton.classList.toggle('toggleReadButton');
    

    p.textContent = `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.read}`;
    p.classList.toggle('bookEntry');
    p.setAttribute('id', `${this.title}`);

    p.appendChild(deleteButton);
    p.appendChild(toggleReadButton);
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

const addBookBtn = document.getElementById('add-book');

//event Listener to get the information from the modal, add it to myLibrary, display it, and then close the modal.
addBookBtn.addEventListener('click', () => {

    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const read = document.getElementById('read');

    if (title.validity.valueMissing) {
        title.setCustomValidity("I am expecting a title!");
        return;
    } else {
        title.setCustomValidity("");
    }

    if (author.validity.valueMissing) {
        author.setCustomValidity("I am expecting an author name!");
        return;
    } else {
        author.setCustomValidity("");
    }

    if (pages.validity.valueMissing) {
        pages.setCustomValidity("Add page count, please!");
        return;
    } else {
        pages.setCustomValidity("");
    }

    newBook = new Book(title.value, author.value, pages.value, read.value);

    addBookToLibrary(newBook);
    console.log(myLibrary);

    displayBooks();

    title.value = '';
    author.value = '';
    pages.value = '';
});

//event Listener to delete an entry from myLibrary and then remove it from the display.
library.addEventListener('click', function (e) {
    if (e.target.classList.contains('deleteButton')) {
        let bookTitle = e.target.getAttribute('id');
        removeBookFromLibrary(bookTitle);
        e.target.parentNode.remove();
    }
    
});


/* 
This event Listener checks for the toggleRead button to be clicked, finds the item in the myLibrary array,
changes it, then reloads the display in the library div, reflecting the changed value.
*/
library.addEventListener('click', function (e) {
    if (e.target.classList.contains('toggleReadButton')) {
        let bookTitle = e.target.parentNode.getAttribute("id");
        for (let i = 0; i < myLibrary.length; i++) {
            if (myLibrary[i].title === bookTitle) {
                myLibrary[i].toggleRead();
                displayBooks();
            }
        }
    }
})