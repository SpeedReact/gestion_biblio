import React, { useState, useEffect } from "react"
import "./BooksPageUser.css"
import BooksList from "../booksList/BooksList"
import { message } from 'antd';
import { LoadingOutlined} from '@ant-design/icons';
import { fetchBooksUser ,fetchSearchBooks,fetchSearchBooksByAuteur} from "../../../services/books.service"
import { empruntBook as empruntBookFromApi} from "../../../services/emprunt.service"

function BooksPageUser() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchValueName, setSearchValueName] = useState("")
  const [searchValueAuteur, setSearchValueAuteur] = useState("")


 
  useEffect(() => {
    let didCancel = false
     const fetchData = async () => {
    
      setLoading(true)
      if (!searchValueName && !searchValueAuteur) {     
        const result = await fetchBooksUser()
        setBooks(result)
        setLoading(false)
      } else if (searchValueName ){
        const result = await fetchSearchBooks(searchValueName)
        console.log("result: ", didCancel)
        if (!didCancel) {
          setBooks(result)
          setLoading(false)
        }
      }
      else {
        const result = await fetchSearchBooksByAuteur(searchValueAuteur)
        console.log("result: ", didCancel)
        if (!didCancel) {
          setBooks(result)
          setLoading(false)
        }

      }
    }
    
    fetchData()

    return () => {
      console.log("cleanup: ", searchValueName)
      console.log("cleanup: ", searchValueAuteur)
    didCancel = true
    }
}, [searchValueName,searchValueAuteur])
  
  
const key = 'updatable';

const success = () => {
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content: 'Emprunt avec success!', key, duration: 2 });
  }, 1000);
};

const warning = () => {
  message.warning('tous les exemplaires sont empruntés essayer plus tard');
};


const warningExiste = () => {
  message.warning('Vous avez déja emprunter ce livre');
};


const error = () => {
  message.error('Vous ne pouvez pas emprunter plus que 2 livres en même temps');
};
 

  const empruntBook = async (bookId,userId) => {
    const result=await empruntBookFromApi(bookId,userId)
    if(result==="done"){
      success()
    }
    else if(result==="error") {
      error()
    }
    else if(result==="existeDéja") {
      warningExiste()
    } else {
      warning()
    }
   
  
  }
 

  // montrer useLocation, useHistory
// montrer nested routes : faire un lien vers chaque task 

  return (
    <div className="books-page">
        

            <div className="search">
              <div className="search-box ">

                  <input
                    type="search"
                    name="search"
                    placeholder="search book by name"
                    value={searchValueName}
                    onChange={e => setSearchValueName(e.target.value)}
                  />
                    <input
                    type="search"
                    name="search"
                    placeholder="search book by auteur"
                    value={searchValueAuteur}
                    onChange={e => setSearchValueAuteur(e.target.value)}
                  />

              </div>
            </div>

       
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
              empruntBook={empruntBook}
              
            />
            </div>
          )}
         
          </>
        )}
      
    </div>
  )
}

export default BooksPageUser