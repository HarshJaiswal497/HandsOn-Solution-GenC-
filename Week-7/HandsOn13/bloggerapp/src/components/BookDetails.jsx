import React from 'react';

function BookDetails() {
  const books = [
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "Deep Work", author: "Cal Newport" }
  ];

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> — {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
