import React, { useState } from 'react';
import './BookForm.css'

export const BookForm = ({addBookHandler}) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [year, setYear] = useState(0)

    const submitBookHandler = () => {
        addBookHandler({title, author, year})
        setTitle("")
        setAuthor("")
        setYear(0)
    }

    return (
        <div className='bookForm'>
            <h3>Add New Book Form:</h3>
            <div>
                <label>Title: </label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Author: </label>
                <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div>
                <label>Year: </label>
                <input type="number" name="year" value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            <div>
                <button onClick={submitBookHandler}>Submit</button>
            </div>
           
        </div>
    );
}
