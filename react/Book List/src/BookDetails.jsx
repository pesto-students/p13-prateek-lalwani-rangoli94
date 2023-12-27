import React from 'react';

export const BookDetails = React.memo(({book}) => {
  return (
    <li>
        <div>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
        </div>
    </li>
  );
})
