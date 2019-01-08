import React from 'react';
import Book from './Book';
/*
Whenever you find yourself repeating some piece of code, always take a step back and think about DRYing((Don't Repeat Yourself) up your code.

Please have a look at the code below. I do really encourage you to try to adapt your code to the following excerpt:

1 - Make a small object with shelf categories:

  const shelves = {
    currentlyReading: ['Currently Reading', 'currentlyReading'],
    wantToRead: ['Want to Read', 'wantToRead'],
    read: ['Read', 'read']
  }
2 - Map over this object to render your bookshelves:

  <div className=""list-books-content"">
    { Object.keys(shelves).map((shelf) =>
      <BookShelf key={shelf}
        shelf={shelves[shelf][1]}
        title={shelves[shelf][0]}
        books={ this.state.books }
        onShelfChange={ () => { this.changeShelf() } }
      />
    )}
  </div>
Hope it helps!
*/
const Shelf = props => {
  const { bookList, moveToShelf } = props;
  return (
    <>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookList
              .filter(book => book.shelf === 'currentlyReading')
              .map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    moveToShelf={moveToShelf}
                    selectedShelf="currentlyReading"
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookList
              .filter(book => book.shelf === 'wantToRead')
              .map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    moveToShelf={moveToShelf}
                    selectedShelf="wantToRead"
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookList
              .filter(book => book.shelf === 'read')
              .map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    moveToShelf={moveToShelf}
                    selectedShelf="read"
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Shelf;
