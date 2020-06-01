let myLibrary = [];

window.library = {
  addBook,
  removeBook,
  editBook,
  books: myLibrary,
};

function book(title, author, numberOfPages, ReadOrNot) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.ReadOrNot = ReadOrNot;
}

book.prototype.info = function () {
  console.log(title, author, ",", numberOfPages, "pages", ",", ReadOrNot);
};

function addBook(title, author, numberOfPages, ReadOrNot) {
  let bookAdded = new book(title, author, numberOfPages, ReadOrNot);
  myLibrary.push(bookAdded);
  bookAdded = "";
}

function removeBook(name) {
  let object = {};
  if (myLibrary.find((book) => book.title === name)) {
    object = myLibrary.find((book) => book.title === name);
    myLibrary.splice(myLibrary.indexOf(object), 1);
    myLibrary = myLibrary.filter((item) => item !== object);
  } else {
    console.log("Cant remove this book! Try again with the correct title");
  }
}

function editBook(categoryToEdit, titleOfTheBook, nameEdited) {
  const category = categoryToEdit;
  if (myLibrary.find((book) => book.title === titleOfTheBook)) {
    const bookObject = myLibrary.find((book) => book.title === titleOfTheBook);
    bookObject[category] = nameEdited;
  } else {
    console.log("Cant remove this book! Try again with the correct title");
  }
}
