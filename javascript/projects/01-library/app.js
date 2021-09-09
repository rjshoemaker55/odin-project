let myLibrary = [
  new Book(0, 'The Hobbit', 'JK Rowlins'),
  new Book(1, 'Hello', 'RJ Shoemaker')
]

function Book(id, name, author) {
  this.id = id
  this.name = name
  this.author = author
  this.read = false
}

Book.prototype.changeReadStatus = function () {
  this.read = !this.read
}

function addBookToLibrary() {
  // do stuff here
}

function displayBooksOnPage() {
  myLibrary.forEach((book) => {
    let bookElement = document.createElement('div')
    bookElement.innerHTML = newBookTemplate(book)
    document.getElementById('books-wrapper').appendChild(bookElement)
  })
}

function newBookTemplate(book) {
  return `
    <div class='book-card'>
      <h2 class='book-name'>${book.name}</h2>
      <h3 class='book-author'>${book.author}</h3>
      <button class='read-button' data-id=${book.id} style='background-color: ${
    book.read ? 'green' : 'red'
  }'>Read</button>
    </div>
    `
}

let readButtons = document.getElementsByClassName('read-button')
console.log(readButtons)

for (let i = 0; i <= readButtons.length; i++) {
  console.log(readButtons)
}

displayBooksOnPage()
