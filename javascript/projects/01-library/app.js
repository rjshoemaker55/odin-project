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

    const readButton = bookElement.querySelector('.read-button')
    const bookId = readButton.dataset.id

    readButton.addEventListener('click', () => {
      myLibrary[bookId].read = !myLibrary[bookId].read
      let bookRead = myLibrary[bookId].read

      readButton.classList.add(bookRead ? 'read-bg' : 'not-read-bg')
      readButton.classList.remove(bookRead ? 'not-read-bg' : 'read-bg')
    })

    document.getElementById('books-wrapper').appendChild(bookElement)
  })
}

function newBookTemplate(book) {
  return `
    <div class='book-card'>
      <h2 class='book-name'>${book.name}</h2>
      <h3 class='book-author'>${book.author}</h3>
      <button class='read-button not-read-bg' data-id=${book.id}>Read</button>
    </div>
    `
}

displayBooksOnPage()
