let myLibrary = [];

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
  myLibrary.forEach((bookInfos) => {
    if (bookInfos.title == name) {
      delete bookInfos;
      console.log("book was removed with sucess!");
    }
  });
}

function editBook(nameObject, id) {
  switch (id) {
    case "bookTitle":
      nameObject.title = prompt("Write the new name of the Book");
      break;
    case "author":
      nameObject.author = prompt("Write the new name of the Author");
      break;
    case "numberOfPage":
      nameObject.numberOfPages = prompt("Write the new number of pages");
      break;
    case "readOrNot":
      nameObject.ReadOrNot = prompt("Write the correct answer");
      break;
  }
}

function menu() {
  console.log("Welcome to your virtual library");
  console.log("Write 1 to add a new book");
  console.log("Write 2 to remove a book");
  console.log("Write 3 to edit a book");
  console.log("Write 4 to show your library");
  console.log("Write 0 to close your menu");
  let choose = prompt("your number");
  if (choose === "1") {
    let title = prompt("your title book");
    let author = prompt("your author of book");
    let numberOfPages = prompt("the number of pages");
    let ReadOrNot = prompt("if you read or not the book");
    addBook(title, author, numberOfPages, ReadOrNot);
  }
  if (choose === "2") {
    let remove = prompt("Write te name of the book you want to remove");
    myLibrary.splice(myLibrary.indexOf(object), 1);
    array = array.filter((item) => item !== object);
    removeBook(remove);
  }
  if (choose === "3") {
    let bookSelected = "";
    let title = prompt("Write the name of the book you want to edit");
    myLibrary.forEach((books) => {
      if (books.title === title) {
        bookSelected = books;
      }
    });
    let id = prompt("choose what you want to edit");
    editBook(bookSelected, id);
  }
  if (choose === "4") {
    console.log("It's your Library");
  }
}
