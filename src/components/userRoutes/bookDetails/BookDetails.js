import React, { useEffect, useState } from "react"
import { fetchBookById } from "../../../services/books.service"
import './BookDetails.css'


function BookDetails({id}) {
  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState({})
 
 console.log(id)
 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await fetchBookById(id)
      setBook(result)
      setLoading(false)
    }
    
    fetchData()
  }, [id])

  return (
    <div>
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
    
          <div className="value">Libéllé : {book.libéllé}</div>

          <div className="value"> auteur : {book.auteur}</div>

          <div className="value">edition : {book.edition}</div>

          <div className="value">nbre de pages : {book.nb_page}</div>

          <div className="value"> date_parution : {book.date_parution}</div>
         
        </>
      )}
    </div>
  )
}

export default BookDetails