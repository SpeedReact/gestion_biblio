 var books = [ {
  id : 1,
  libéllé : "cbfdfgg",
  auteur : "ffvfvf fvf",
  edition : "oumaima96",
  nb_exemplaire : 5,
  nb_page : 200,
  date_parution : "2000-03-26"
}, {
  id : 2,
  libéllé : "libéllé 2",
  auteur : "auteur 2",
  edition : "edition 2",
  nb_exemplaire : 5,
  nb_page : 200,
  date_parution : "2000-03-26"
} ]
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  

  export const fetchBooks = async () => {
    await delay(500)
    return books
  }

  export const deleteBook = async (id) => {
    const newBooks = books.filter(book => book.id !== id)
     books=newBooks  
     return books
  }

  export const updateBook = async (id,libéllé,auteur,edition) => {
    const newBooks = books.map(book =>
      book.id === id ? { libéllé, auteur,edition } : book
    )
    books=newBooks
  }

  export const fetchBookById=async(bookId)=>{
    await delay(500)
    return books.find(book => book.id===bookId)
  }
  
  export const fetchSearchBooks = async searchValue => {
    await delay(500)
    return books.filter(book => book.libéllé.includes(searchValue))
  }


