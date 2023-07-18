import React from 'react';
import { useSelector } from 'react-redux';

const BookDetail = ({ match }) => {
  const bookId = match.params.id;
  const books = useSelector((state) => state.book);
  const book = books.find((book) => book.id === bookId);

  return (
    <div>
      <h2>Book Details</h2>
      {book ? (
        <div>
          <div>
            <strong>Title:</strong> {book.title}
          </div>
          <div>
            <strong>Author:</strong> {book.author}
          </div>
        </div>
      ) : (
        <p>Book not found.</p>
      )}
    </div>
  );
};

export default BookDetail;
