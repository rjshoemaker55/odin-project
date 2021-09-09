// Write a constructor for making “Book” objects. We will revisit this in the project
// at the end of this lesson. Your book objects should have the book’s title, author,
// the number of pages, and whether or not you have read the book.

// Put a function into the constructor that can report the book info like so:
// theHobbit.info() "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return `${this.title} by ${this.author}, ${pages} pages, ${
      read ? 'previously read.' : 'not read yet.'
    }`
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)

// console.log(theHobbit.info())

// The task has two parts.
// Given the following objects:
// Use __proto__ to assign prototypes in a way that any property lookup will follow the path:
// pockets → bed → table → head.
// For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
let head = {
  glasses: 1
}

let table = {
  __proto__: head,
  pen: 3
}

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2
}

let pockets = {
  __proto__: bed,
  money: 2000
}

// console.log(pockets.pen, bed.glasses)

const dog = {
  init: function (sound) {
    this.sound = sound
    return this
  },
  makeSound: function () {
    console.log(this.sound)
  }
}

const annie = Object.create(dog).init('Woof!')
const jagger = Object.create(dog).init(':(')

annie.makeSound()
jagger.makeSound()

// console.log('is annie a dog? ', dog.isPrototypeOf(annie))
