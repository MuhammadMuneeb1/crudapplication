import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from './components/ListPage';
import CreateBookPage from './components/CreateBookPage';
import BookDetailPage from './components/BookDetailPage';
import NotFoundPage from './components/NotFoundPage';
import { Provider } from 'react-redux';
import store from './components/store';
import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <h1>Book Library</h1>
          <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/create" element={<CreateBookPage />} />
            <Route path="/books/:id" element={<BookDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
