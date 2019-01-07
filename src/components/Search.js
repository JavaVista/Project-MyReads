import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

class SearchPage extends Component {
  state = {
    query: '',
    booksSearch: [],
    noSearch: false
  };

  updateQuery = query => {
    this.setState({
      query: query
    });
    this.updateBooksSearch(query);
  };

  updateBooksSearch = query => {
    if (query) {
      BooksAPI.search(query).then(booksSearch => {
        if (query === this.state.query) {
          if (booksSearch.error) {
            this.setState({ booksSearch: [], noSearch: true});
          } else {
            this.setState({ booksSearch: booksSearch, noSearch: false });
          }
        }
      });
    } else {
      this.setState({ booksSearch: [], noSearch: false });
    }
  };

  render() {
    const classes = `close-search btn`;
    let { booksList, moveToShelf } = this.props;
    let { noSearch } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className={classes} to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.booksSearch.map(booksSearch => {
              let bookShelf = 'none';
              booksList.map(book =>
                book.id === booksSearch.id ? (bookShelf = book.shelf) : ''
              );
              return (
                <li key={booksSearch.id}>
                  <Book
                    book={booksSearch}
                    moveToShelf={moveToShelf}
                    selectedShelf={bookShelf}
                  />
                </li>
              );
            })}
          {noSearch && (
            <h3>Your search did not return any books. Please, try again!</h3>
          )}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
