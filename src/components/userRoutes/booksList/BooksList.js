import React from "react"

import Book from "../book/Book"
import "./BooksList.css"
export default function BooksList({ books, empruntBook }) {

  // use it if you will use Redirect
  // const [taskId, setTaskId]=useState('')

 
  return (
    <div className="cards">
      {/* {taskId!=="" && <Redirect to={`/tasks/${taskId}`} />} */}
    
        {books.map(book => (
          
            <Book
              key={book.id}
              id={book.id}
              libéllé={book.libéllé}
              auteur={book.auteur}
              edition={book.edition}
              empruntBook={empruntBook}
            /> 
         
        ))}
      
    </div>
  )
}