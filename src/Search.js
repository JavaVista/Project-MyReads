import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {
  state = {
    query: '',
    booksSearch: []
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
        if (booksSearch.error) {
          this.setState({ booksSearch: [] });
        } else {
          this.setState({ booksSearch: booksSearch });
        }
      });
    } else {
      this.setState({ booksSearch: [] });
    }
  };

  render() {
    const classes=`close-search btn`
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className={ classes }
            to="/"

          >
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
            {this.state.booksSearch.map(booksSearch => (
              <li key={booksSearch.id}>
                <Book book={booksSearch} moveToShelf={this.props.moveToShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
