import React from 'react';
import BookDetail from './BookDetail';

const BookDetailPage = ({ match }) => {
  return (
    <div>
      <BookDetail match={match} />
    </div>
  );
};

export default BookDetailPage;
