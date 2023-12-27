import React, { useState } from 'react';
import Book from './Book'
import { BookForm } from './BookForm'


const INITIAL_BOOKS = [
  { title: 'Book 1', author: 'Author 1', year: 2020 },
  { title: 'Book 2', author: 'Author 2', year: 2018 },
  { title: 'Book 3', author: 'Author 3', year: 2022 },
];
export function BookList() {
  const [books, setBooks] = useState(INITIAL_BOOKS)

  const getBooks = () => {
    if(books.length === 0) {
      return (<h3>Book List is currently empty</h3>)
    }
    const bookList = books.map((book, id) =>  ( <Book key={id} book={book} deleteBookHandler={deleteBookHandler}/>)
    )
    return bookList
  }

  const addBookHandler = (book) => {
    let newBooks = [...books, book]
    setBooks(newBooks)
  }

  const deleteBookHandler = (bookTitle) => {
    const bookList = books.filter(({title}) => title !== bookTitle)
    setBooks(bookList)
  }

  return (
    <>
      <ul>
        {getBooks()}
      </ul>
      <BookForm addBookHandler= {addBookHandler}/>
    </>
   
  );
}
