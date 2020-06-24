import React from "react"

import Emprunt from "../emprunt/Emprunt"
import "./EmpruntsList.css"
export default function EmpruntsList({ emprunts }) {

  // use it if you will use Redirect
  // const [taskId, setTaskId]=useState('')

 
  return (
    <div className="cards">
      {/* {taskId!=="" && <Redirect to={`/tasks/${taskId}`} />} */}
    
        {emprunts.map(emprunt => (
          
            <Emprunt
              key={emprunt.id}
              dateEmprunt={emprunt.date_emprunt}
              dateRetour={emprunt.date_retour}
              bookId ={emprunt.bookId}
              userId ={emprunt.userId}
            /> 
         
        ))}
      
    </div>
  )
}