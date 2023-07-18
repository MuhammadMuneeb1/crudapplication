import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from './bookSlice';
import '../index.css';

const BookList = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <h2>Book List</h2>
      {books.length > 0 ? (
        <ul className="list-group">
          {books.map((book) => (
            <li key={book.id} className="list-group-item">
              <div>
                <strong>Title:</strong> {book.title}
              </div>
              <div>
                <strong>Author:</strong> {book.author}
              </div>
              <button onClick={() => handleDelete(book.id)} className="btn btn-danger">Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default BookList;
