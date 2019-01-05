import React from 'react';
import Book from './Book';

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
