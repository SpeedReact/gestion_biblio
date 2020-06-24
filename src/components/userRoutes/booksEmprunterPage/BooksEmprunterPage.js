import React, { useState, useEffect } from "react"
import "./BooksEmprunterPage.css"
import BooksList from "../booksList/BooksList"
import { message } from 'antd';
import { LoadingOutlined} from '@ant-design/icons';
import { fetchBooksEmprunter } from "../../../services/books.service"
import { retournerBook as retournerBookFromApi} from "../../../services/emprunt.service"


function BooksEmprunterPage() {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  
  const userId=localStorage.getItem("userId")

  useEffect(() => {
    const fetchData = async () => {
      try{
      setLoading(true)
     
      const result = await fetchBooksEmprunter(userId)
      setBooks(result)
      setLoading(false)
      }
      catch(e){
        setLoading(false)
      }
    }
    console.log("useEffect")

    fetchData()
  }, [userId])

  
const success = () => {

    message.success('Livre retourner avec success!')
  
};


 

  const retournerBook = async (bookId,userId) => {
    const result=await retournerBookFromApi(bookId,userId)
    console.log("rees"+result)
    console.log("retourner")
    await success()
    const newBooks = books.filter(book => book.id !== bookId)
    console.log(newBooks)
    setBooks(newBooks)
  }
 



  return (
    <div className="books-page">
       
        {loading ? (
          <div> loading ...
            <LoadingOutlined /> 
            </div>
        ) : (
          <>
          {(
            <div>

            <BooksList
              books={books}
              empruntBook={retournerBook}
              
            />
            </div>
          )}
         
          </>
        )}
      
    </div>
  )
}

export default BooksEmprunterPage