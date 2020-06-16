import React from "react"
import "./Emprunt.css"
import "antd/dist/antd.css";
import { Card, Popover,  } from 'antd';

export default function Emprunt({
  id,
  dateEmprunt,
  dateRetour,
  book,
  user
}) {

  

  return (
    <div>
      <Card
            hoverable
           
            >
              <p> date Emprunt : {dateEmprunt}</p>
              <p>date retour : {dateRetour}</p>
              <p>libéllé livre : {book.libéllé}</p> 
              <p>Auteur livre : {book.auteur}</p> 
              <p>Nom user : {user.nom}</p>
              <p>Prénom user : {user.prénom}</p> 
          </Card>
        
         
   
    </div>
  )
}

