import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ bookArray, deleteItem }) => {
  const table = bookArray.map((book, i) => {
    const { title = title, author = author, isbn = isbn } = book;
    return (
      <tr key={i}>
        <th>{title}</th>
        <th>{author}</th>
        <th>{isbn}</th>
        <th>
          <a onClick={deleteItem} className='delete' id={i} href='#'>
            X
          </a>
        </th>
      </tr>
    );
  });

  return (
    <>
      <h1>Book List</h1>
      <table className='u-full-width '>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th></th>
          </tr>
        </thead>
        <tbody id='book-list'>{table}</tbody>
      </table>
    </>
  );
};

BookList.prototype = {
  bookArray: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default BookList;
