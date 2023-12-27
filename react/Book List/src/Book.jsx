import React, { PureComponent } from 'react';
import './Book.css'

class Book extends PureComponent {

  render() {
    return(
      <li >
        <div>
            <h3 className={"title"}>{this.props.book.title}</h3>
            <p>Author: {this.props.book.author}</p>
            <p>Year: {this.props.book.year}</p>
            <button onClick={() => this.props.deleteBookHandler(this.props.book.title)}>Delete</button>
        </div>
      </li>
    )
  }
}

export default Book;
