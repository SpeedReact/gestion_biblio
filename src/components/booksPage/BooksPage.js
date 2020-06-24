import React, { useState, useEffect } from "react"
import "./BooksPage.css"
import { Spin, Space } from 'antd';
import BooksList from "../booksList/BooksList"
import BookForm from "../bookForm/BookForm"
import { fetchBooks,archiverBook as archiverBookFromApi ,addBook as addBookFromApi, deleteBook as deleteBookFromApi, updateBook as updateBookFromApi} from "../../services/books.service"
function BooksPage() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [FormIsVisible, setFormIsVisible]=useState(false)

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
        setError("An error occurred when we tried to fetch books")
      }
    }
    console.log("useEffect")

    fetchData()
  }, [])



  const addBook = async (libéllé, auteur,edition,nb_exemplaire,nb_page,date_parution) => {
    const newBook = await addBookFromApi({
      libéllé,
      auteur,
      edition,
      nb_exemplaire,
      nb_page,
      date_parution,
    })
    setBooks((previousBooks) => [...previousBooks, { ...newBook }])
    setFormIsVisible(!FormIsVisible)
  }

  const updateBook = async (id,libéllé, auteur,edition) => {
    await updateBookFromApi(id, {
      libéllé,
      auteur,
      edition,
      nb_exemplaire: 20,
      nb_page: 500,
      date_parution: "2020-03-06",
    })

    const newBooks = books.map((book) =>
      book.id === id ? { id,libéllé, auteur,edition,...book } : book
    )
    console.log(newBooks)

    setBooks(newBooks)

    
  }



  const deleteBook = async (id) => {
    await deleteBookFromApi(id)
    const newBooks = books.filter(book => book.id !== id)
    setBooks(newBooks)
  }

  const archiverBook = async (id,archiver) => {

    await archiverBookFromApi(id,archiver)

    const newBooks = books.map(book =>
        book.id === id ? { ...book ,archiver} : book
    )
    setBooks(newBooks)
   
  }

  const toggleForm=()=>{
   setFormIsVisible(!FormIsVisible)
 }

  // montrer useLocation, useHistory
// montrer nested routes : faire un lien vers chaque task 

  return (
    <div className="books-page">
      {/* <Menu /> */}
      {/* <Link to="/about" >Hello </Link> */}

      
   {/*    <TaskForm addTask={memoizedCallback} /> */}
        <div className="search">
     
          <div className="toggleForm">
            <button className="toggle" onClick={toggleForm}>Toggle form</button>
           </div>
           { FormIsVisible &&
                  <BookForm addBook={addBook} />
               }
        </div>
        {loading ? (
          <div className='loading'>
            <Space size="middle">
              <Spin size="large" />
            </Space>
          </div>
        ) : (
          <>
          {(
            <div>
              
            <BooksList
              books={books}
              deleteBook={deleteBook}
              updateBook={updateBook}
              archiverBook={archiverBook}
            />
            </div>
          )}
          {error.length!==0 && (<div>{error}</div>)}
          </>
        )}
      
    </div>
  )
}

export default BooksPage