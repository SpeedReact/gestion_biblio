import React, { useEffect, useState } from "react"
import { fetchUserById  } from "../../services/users.service"
import {  fetchEmpruntsById } from "../../services/emprunt.service"
import { useParams } from "react-router-dom"
import './UserDetails.css'
import BookDetails from "../bookDetails/BookDetails"
import { Card } from 'antd';



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
    <div className="user-details-area">
      <h3>User details</h3>  
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
         <div className="row ">
           
           <div className="col-md-4">
            <Card title={user.nom} bordered={false}>
             <div >Nom :  {user.nom}</div>
             <div>  Prénom : {user.prénom}</div>
             <div > nom utilisateur : {user.nomutilisateur}</div>
             <div> mot de passe : {user.motdepasse}</div>
             </Card>
             
           </div>
           <div className="col-md-8 ">
           <h3> Emprunts : </h3>
            <div className="row">
            {emprunts.map(emprunt => (
              <div className="col-md-6">
                 <Card title="Emprunt" >
                 <div key={emprunt.id} >
                  
                  <p>date emprunt : {emprunt.date_emprunt }</p>
                  <p>date retour : {emprunt.date_retour} </p>
                 
                  <strong>Livre</strong>
                  <BookDetails id={emprunt.bookId} />
                </div>
                 </Card>
                 

              </div>
                 ))}
            </div>
             
          
               
            
            
           </div>
         </div>

            
         
        </>
      )}
    </div>
  )
}

export default UserDetails