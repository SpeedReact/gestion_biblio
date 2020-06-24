import React, { useEffect, useState } from "react"
import { fetchUserById  } from "../../services/users.service"
import {  fetchEmpruntsById } from "../../services/emprunt.service"
import { useParams } from "react-router-dom"
import './UserDetails.css'
import BookDetails from "../bookDetails/BookDetails"


function UserDetails() {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})
  const [emprunts, setEmprunts] = useState([])
 
 
  const { userId } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const resultUser = await fetchUserById(Number(userId))
      setUser(resultUser)
      const resultEmprunt = await fetchEmpruntsById(Number(userId))
      console.log(resultEmprunt)
      setEmprunts(resultEmprunt)
      setLoading(false)
    }
    
    fetchData()
  }, [userId])

  return (
    <div className="user-details">
      <strong>user details</strong>  
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
          <div >Nom :  {user.nom}</div>
          <div>  Prénom : {user.prénom}</div>
          <div > nom utilisateur : {user.nomutilisateur}</div>
          <div> mot de passe : {user.motdepasse}</div>

            
          <strong> emprunts : </strong>
              {emprunts.map(emprunt => (
          
                <div key={emprunt.id} >
                  
                  <p>date emprunt : {emprunt.date_emprunt }</p>
                  <p>date retour : {emprunt.date_retour} </p>
                 
                  <strong>Livre</strong>
                  <BookDetails id={emprunt.bookId} />
                  <strong>*****************************</strong>
                </div>
               

        ))}
            
        </>
      )}
    </div>
  )
}

export default UserDetails