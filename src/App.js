import React from 'react';
import { Route } from 'react-router-dom';
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
/*
TODO: You should put the setState command inside 'then' part of the update API to ensure consistency. For example, if the API fails your code should not change the books displayed.

BooksAPI.update(book,shelfName).then(() => {this.setState({books: newBooks});});

In order to speed up your app. You can setState using state from the previous state by replacing the book with updated shelf. This way you don't need to call the getAll() API again.
*/

  moveToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  };

  render() {
    return (
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
    );
  }
}

export default BooksApp;
