export const addBooksInAuthorsData = (AuthorData, BooksData) => {
  for (let i = 0; i < AuthorData.length; i++) {
    AuthorData[i].books = BooksData.filter(
      (book) =>
        book.authorName.toLowerCase() === AuthorData[i].authorName.toLowerCase()
    );
  }
};
