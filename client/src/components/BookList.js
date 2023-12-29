import React from 'react';

function BookList() {
  // Dummy data, replace with actual data fetching
  const books = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
  ];

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
