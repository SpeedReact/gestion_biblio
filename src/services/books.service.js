import Axios from 'axios'
    
  export const fetchBooks = async () => {
    const result = await Axios.get(
      "http://localhost:8000/books", 
    )
    return(result.data)
      
    
  }

  export const fetchBooksUser = async () => {
    const result = await Axios.get(
      "http://localhost:8000/books/user", 
    )
    return(result.data)
      
    
  }


  
  export const fetchBooksEmprunter = async (userId) => {
    console.log("userId",userId)
    const result = await Axios.get(
      "http://localhost:8000/books/emprunter/"+userId
    )
    return(result.data)
      
    
  }

  export const addBook = async book => {
    const result = await Axios.post(
      "http://localhost:8000/books" ,book
    )
    return result.data
  }

 
  export const deleteBook = async (id) => {
    const result = await Axios.delete(
      "http://localhost:8000/books/" + id,
    )
     return result.data
  }

 
  export const updateBook = async (id, book) => {
    await Axios.put(
      "http://localhost:8000/books/"+id,
      book
    )
  }
  
  export const fetchBookById=async(bookId)=>{
    const result = await Axios.get(
      "http://localhost:8000/books/" + bookId
    )
   
    return result.data
 }


 export const archiverBook = async (id, archiver) => {
  await Axios.post(
 "http://localhost:8000/books/archiver",{id,archiver}
 
)
}

  
  export const fetchSearchBooks = async (searchValue) => {
    const result = await Axios.get(
      "http://localhost:8000/books/search/"+searchValue
    )
    return(result.data)
  
  }


  export const fetchSearchBooksByAuteur = async (searchValue) => {
    const result = await Axios.get(
      "http://localhost:8000/books/searchByAuteur/"+searchValue
    )
    return(result.data)
  
  }


