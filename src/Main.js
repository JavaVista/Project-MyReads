import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookPage from './Book';

class MainPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              {/* TODO: Add to a component*/}
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.booksList
                    .filter(book => book.shelf === 'currentlyReading')
                    .map(book => (
                      <li key={book.id}>
                        <BookPage
                          book={book}
                          moveToShelf={this.props.moveToShelf}
                          // selectedShelf='currentlyReading'
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              {/* TODO: Add to a component*/}
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.booksList
                    .filter(book => book.shelf === 'wantToRead')
                    .map(book => (
                      <li key={book.id}>
                        <BookPage
                          book={book}
                          moveToShelf={this.props.moveToShelf}
                          // selectedShelf='wantToRead'
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              {/* TODO: Add to a component*/}
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.booksList
                    .filter(book => book.shelf === 'read')
                    .map(book => (
                      <li key={book.id}>
                        <BookPage
                          book={book}
                          moveToShelf={this.props.moveToShelf}
                          // selectedShelf='read'
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link className="button"
          to="/search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
