import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class MainPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              bookList={this.props.booksList}
              moveToShelf={this.props.moveToShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link className="button" to="/search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
