import React from "react"

import User from "../user/User"
import "./UsersList.css"
export default function UsersList({ users, updateUser }) {

  // use it if you will use Redirect
  // const [taskId, setTaskId]=useState('')

 
  return (
    <div className="cards">
      {/* {taskId!=="" && <Redirect to={`/tasks/${taskId}`} />} */}
    
        {users.map(user => (
          
            <User
              key={user.id}
              id={user.id}
              nom={user.nom}
              prénom={user.prénom}
              nomutilisateur={user.nomutilisateur}
              motdepasse={user.motdepasse}
              etat={user.etat}
              updateUser={updateUser}
            /> 
         
        ))}
      
    </div>
  )
}