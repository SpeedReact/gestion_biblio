import React, { useEffect, useState } from "react"
import { fetchUserById  } from "../../services/users.service"
import {  fetchEmpruntsById } from "../../services/emprunt.service"
import { useParams } from "react-router-dom"
import './UserDetails.css'
import Emprunt from "../emprunt/Emprunt"


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
      <div className="header">user details</div>  
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
          <div >Nom :  {user.nom}</div>
          <div>  Prénom : {user.prénom}</div>
          <div > nom utilisateur : {user.nomutilisateur}</div>
          <div> mot de passe : {user.motdepasse}</div>

            
              emprunts : 
              {emprunts.map(emprunt => (
          
                <div key={emprunt.id} >
                  date emprunt : {emprunt.date_emprunt }
                  , date retour : {emprunt.date_retour}
                  , libéllé livre : {emprunt.book.libéllé}
                </div>

        ))}
            
        </>
      )}
    </div>
  )
}

export default UserDetails