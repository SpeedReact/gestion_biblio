import React, { useEffect, useState } from "react"
import { fetchUserById } from "../../services/users.service"
import { useParams, useLocation, useRouteMatch } from "react-router-dom"
import './UserDetails.css'


function UserDetails() {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})
 
 
  const { userId } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await fetchUserById(userId)
      setUser(result)
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
          <div className="title">Nom</div>
          <div className="value">{user.nom}</div>

          <div className="title">prénom</div>
          <div className="value">{user.prénom}</div>

          <div className="title">nomutilisateur</div>
          <div className="value">{user.nomutilisateur}</div>

          <div className="title">mot de passe</div>
          <div className="value">{user.motdepasse}</div>


        </>
      )}
    </div>
  )
}

export default UserDetails