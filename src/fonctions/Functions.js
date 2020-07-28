
import { fetchBooks,archiverBook as archiverBookFromApi ,addBook as addBookFromApi, deleteBook as deleteBookFromApi, updateBook as updateBookFromApi} from "../services/books.service"



module.exports={
  
   AllBooks () {
          try{
          const result = fetchBooks()
          return result
          }
          catch(e){
            console.log("An error occurred when we tried to fetch books")
          }
        }    
   ,
     addBook (libéllé, auteur,edition,nb_exemplaire,nb_page,date_parution) {
        const newBook = addBookFromApi({
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