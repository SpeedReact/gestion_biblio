import React, { useState, memo } from "react"
import './BookForm.css'
function BookForm({ addBook }) {
  const [libéllé, setLibéllé] = useState("")
  const [auteur, setAuteur] = useState("")
  const [edition, setEdition] = useState("")
  const [nb_exemplaire, setNb_exemplaire] = useState(0)
  const [nb_page, setNb_page] = useState(0)
  const [date_parution, setDate_parution] = useState("")


 
  const handleAddBook = () => {
    addBook(libéllé, auteur,edition,nb_exemplaire,nb_page,date_parution)
  
  }

  
  return (
    <div className="task-form row ">
      <div className="col-md-6">
      <input
        type="text"
        name="libéllé"
        value={libéllé}
        onChange={e => setLibéllé(e.target.value)}
      />
      </div>
      <div className="col-md-6">   
      <input
        type="text"
        value={auteur}
        name="auteur"
        onChange={e => setAuteur(e.target.value)}
      />
      </div>
      <div className="col-md-6">
      <input
        type="text"
        value={edition}
        name="edition"
        onChange={e => setEdition(e.target.value)}
      />
      </div>
      <div className="col-md-6">
      <input
        type="number"
        value={nb_exemplaire}
        name="nb_exemplaire"
        onChange={e => setNb_exemplaire(e.target.value)}
      />
      </div>
      <div className="col-md-6">
      <input
        type="number"
        value={nb_page}
        name="nb_page"
        onChange={e => setNb_page(e.target.value)}
      />
      </div>
      <div className="col-md-6">
      <input
        type="date"
        value={date_parution}
        name="date_parution"
        onChange={e => setDate_parution(e.target.value)}
      />
      </div>
      <div className="col-md-12 submit">
      <button className="button" onClick={handleAddBook}>
        Add a book
      </button>
      </div>
    </div>
  )
}
export default memo(BookForm)