let myLibrary = [];

window.library = {
  addBook,
  removeBook,
  editBook,
  getBook,
  books: myLibrary,
};

function book(title, author, numberOfPages, ReadOrNot) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.ReadOrNot = ReadOrNot;
}

book.prototype.info = function () {
  console.log(
    this.title,
    this.author,
    ",",
    this.numberOfPages,
    "pages",
    ",",
    this.ReadOrNot
  );
};

function addBook(title, author, numberOfPages, ReadOrNot) {
  let bookAdded = new book(title, author, numberOfPages, ReadOrNot);
  myLibrary.push(bookAdded);
  bookAdded = "";
}

function removeBook(name) {
  let object = {};
  const search = myLibrary.find((book) => book.title === titleOfTheBook);
  if (!search) {
    console.log("Cant remove this book! Try again with the correct title");
  } else {
    object = myLibrary.find((book) => book.title === name);
    myLibrary.splice(myLibrary.indexOf(object), 1);
    myLibrary = myLibrary.filter((item) => item !== object);
  }
}

function editBook(categoryToEdit, titleOfTheBook, nameEdited) {
  const category = categoryToEdit;
  const search = myLibrary.find((book) => book.title === titleOfTheBook);
  if (!search) {
    console.log("Cant remove this book! Try again with the correct title");
  } else {
    const bookObject = search;
    bookObject[category] = nameEdited;
  }
}

function getBook(titleOfTheBook) {
  let object = new book();
  object.prototype = Object.create(book.prototype);
  const search = myLibrary.find((book) => book.title === titleOfTheBook);
  if (!search) {
    console.log("Sorry but this book dont exist");
  } else {
    object = myLibrary.find((book) => book.title === name);
    object.info();
  }
}
