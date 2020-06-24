import React, { useEffect, useState } from "react"
import { fetchBookById } from "../../services/books.service"
import './BookDetails.css'
import { Spin, Space } from 'antd';


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
        <div className='loading'>
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>
      ) : (
        <>
    
          <div className="value">Libéllé : {book.libéllé}</div>

          <div className="value"> auteur : {book.auteur}</div>

          <div className="value">edition : {book.edition}</div>

        
          <div className="value"> nombre exemplaire : {book.nb_exemplaire}</div>

          <div className="value">nbre de pages : {book.nb_page}</div>

          <div className="value"> date_parution : {book.date_parution}</div>

          <div className="value"> nbre livre en cours emprunt  : {book.nb_livre_emprunter}</div>

          <div className="value"> Archiver  : {book.archiver}</div>
         
        </>
      )}
    </div>
  )
}

export default BookDetails