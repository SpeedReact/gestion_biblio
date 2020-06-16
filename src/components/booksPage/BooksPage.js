import React, { useState, useEffect } from "react"
import "./BooksPage.css"
import BooksList from "../booksList/BooksList"
import { fetchBooks , deleteBook as deleteBookFromApi, updateBook as updateBookFromApi} from "../../services/books.service"
function BooksPage() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const [error, setError]=useState("")

  
  useEffect(() => {
    const fetchData = async () => {
      try{
      setLoading(true)
     
      const result = await fetchBooks()
      setBooks(result)
      setLoading(false)
      }
      catch(e){
        setLoading(false)
        setError("An error occurred when we tried to fetch tasks")
      }
    }
    console.log("useEffect")

    fetchData()
  }, [])

  const addBook = (libéllé, auteur,edition,nb_exemplaire,nb_page) => {
    setBooks(previousBooks => [
      ...previousBooks,
      { id: previousBooks.length + 1, libéllé,auteur,edition, nb_exemplaire: Number(nb_exemplaire),nb_page: Number(nb_page) }
    ])
  }

  const updateBook = async (id,libéllé, auteur,edition) => {
    await updateBookFromApi(id,libéllé,auteur,edition)
    const newBooks = books.map(book =>
        book.id === id ? {libéllé, auteur,edition} : book
    )
    setBooks(newBooks)
    console.log("update book")
  }


  const deleteBook = async (id) => {
    await deleteBookFromApi(id)
    const newBooks = books.filter(book => book.id !== id)
    setBooks(newBooks)
  }



  // montrer useLocation, useHistory
// montrer nested routes : faire un lien vers chaque task 

  return (
    <div className="books-page">
      {/* <Menu /> */}
      {/* <Link to="/about" >Hello </Link> */}

      
   {/*    <TaskForm addTask={memoizedCallback} /> */}
        <div className="search">
          <input
            type="search"
            name="search"
            placeholder="search book by name"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </div>
        {loading ? (
          <div>Loading ... </div>
        ) : (
          <>
          {(
            <BooksList
              books={books}
              deleteBook={deleteBook}
              updateBook={updateBook}
            />
          )}
          {error.length!==0 && (<div>{error}</div>)}
          </>
        )}
      
    </div>
  )
}

export default BooksPage