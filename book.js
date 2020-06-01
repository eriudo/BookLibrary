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
  myLibrary.forEach((bookInfos) => {
    if (bookInfos.title == name) {
      object = bookInfos;
    }
  });
  myLibrary.splice(myLibrary.indexOf(object), 1);
  myLibrary = myLibrary.filter((item) => item !== object);
}

function editBook(categoryToEdit, titleOfTheBook, nameEdited) {
  switch (categoryToEdit) {
    case "title":
      myLibrary.forEach((books) => {
        if (books.title === titleOfTheBook) {
          books.title = nameEdited;
        }
      });
      break;
    case "author":
      myLibrary.forEach((books) => {
        if (books.title === titleOfTheBook) {
          books.author = nameEdited;
        }
      });
      break;
    case "numberOfPage":
      myLibrary.forEach((books) => {
        if (books.title === titleOfTheBook) {
          books.numberOfPages = nameEdited;
        }
      });
      break;
    case "readOrNot":
      myLibrary.forEach((books) => {
        if (books.title === titleOfTheBook) {
          books.ReadOrNot = nameEdited;
        }
      });
      break;
  }
}
