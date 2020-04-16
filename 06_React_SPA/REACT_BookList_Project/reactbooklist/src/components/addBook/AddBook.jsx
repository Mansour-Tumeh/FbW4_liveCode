import React from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ createListItem }) => {
  return (
    <>
      <h1>Add Book</h1>
      <form id='book-form' onSubmit={createListItem}>
        <div>
          <label htmlFor='title'>Title</label>
          <input name='title' className='u-full-width' id='title' type='text' />
        </div>
        <div>
          <label htmlFor='author'>Author</label>
          <input
            name='author'
            className='u-full-width'
            id='author'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='isbn'>ISBN#</label>
          <input name='isbn' className='u-full-width' id='isbn' type='text' />
        </div>
        <div>
          <input className='u-full-width' value='Submit' type='submit' />
        </div>
      </form>
    </>
  );
};

AddBook.prototype = {
  createListItem: PropTypes.func.isRequired
};

export default AddBook;
