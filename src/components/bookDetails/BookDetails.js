import React, { useEffect, useState } from "react"
import { fetchBookById } from "../../services/books.service"
import { useParams, useLocation, useRouteMatch } from "react-router-dom"
import './BookDetails.css'


function BookDetails() {
  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState({})
 
 
  const { bookId } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await fetchBookById(bookId)
      setBook(result)
      setLoading(false)
    }
    
    fetchData()
  }, [bookId])

  return (
    <div className="task-details">
      <div className="header">Book details</div>  
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
          <div className="title">Libéllé</div>
          <div className="value">{book.libéllé}</div>

          <div className="title">auteur</div>
          <div className="value">{book.auteur}</div>

          <div className="title">edition</div>
          <div className="value">{book.edition}</div>

          <div className="title">nombre exemplaire</div>
          <div className="value">{book.nb_exemplaire}</div>

          <div className="title">nbre de pages</div>
          <div className="value">{book.nb_page}</div>
        </>
      )}
    </div>
  )
}

export default BookDetails