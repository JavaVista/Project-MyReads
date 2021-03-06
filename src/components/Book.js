import React, { Component } from 'react';

class Book extends Component {
  render() {
    let thumbnail = this.props.book.imageLinks
      ? this.props.book.imageLinks.thumbnail
      : '';
    let { book, selectedShelf } = this.props;
    let { title, authors } = this.props.book;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${thumbnail}")`
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={selectedShelf}
              onChange={event =>
                this.props.moveToShelf(book, event.target.value)
              }
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}

export default Book;
