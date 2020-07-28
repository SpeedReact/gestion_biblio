import React from "react"

import Book from "../book/Book"
import "./BooksList.css"
export default function BooksList({ books, deleteBook, updateBook,archiverBook }) {

  
 
  return (
    <div className="cards">
      
    
        {books.map(book => (
          
            <Book
              key={book.id}
              id={book.id}
              libéllé={book.libéllé}
              auteur={book.auteur}
              edition={book.edition}
              archiver={book.archiver}
              deleteBook={deleteBook}
              updateBook={updateBook}
              archiverBook={archiverBook}
            /> 
         
        ))}
      
    </div>
  )
}