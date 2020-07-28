import React, { useState, useEffect } from "react"
import { fetchBooks,archiverBook as archiverBookFromApi ,addBook as addBookFromApi, deleteBook as deleteBookFromApi, updateBook as updateBookFromApi} from "../services/books.service"
const [books, setBooks] = useState([])


module.exports={
   AllBooks =  async () => {
          try{
          const result = await fetchBooks()
          return result
          }
          catch(e){
            setError("An error occurred when we tried to fetch books")
          }
        }    
   ,
     addBook = async (libéllé, auteur,edition,nb_exemplaire,nb_page,date_parution) => {
        const newBook = await addBookFromApi({
          libéllé,
          auteur,
          edition,
          nb_exemplaire,
          nb_page,
          date_parution,
        })
        return newBook
      }
    ,
}