import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import SearchPage from './components/Search';
import MainPage from './components/Main';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  /**
   * TODO: Instead of using this state variable to keep track of which page
   * we're on, use the URL in the browser's address bar. This will ensure that
   * users can use the browser's back and forward buttons to navigate between
   * pages, as well as provide a good URL they can bookmark and share.
   */
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  }

  moveToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  };

  render() {
    return (
      <HashRouter>
        <div className="app">
          <Route
            exact
            path="/"
            render={() => (
              <MainPage
                booksList={this.state.books}
                moveToShelf={this.moveToShelf}
              />
            )}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <SearchPage
                booksList={this.state.books}
                moveToShelf={this.moveToShelf}
              />
            )}
          />
        </div>
      </HashRouter>
    );
  }
}

export default BooksApp;
