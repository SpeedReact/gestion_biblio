import React, { useState, useEffect } from "react"
import "./UsersPage.css"
import UsersList from "../usersList/UsersList"
import { fetchUsers } from "../../services/users.service"
function UsersPage() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const [error, setError]=useState("")

  
  useEffect(() => {
    const fetchData = async () => {
      try{
      setLoading(true)
     
      const result = await fetchUsers()
      setUsers(result)
      setLoading(false)
      }
      catch(e){
        setLoading(false)
        setError("An error occurred when we tried to fetch tasks")
      }
    }
    console.log("useEffect")

    fetchData()
  }, [])

  const addUser = (nom, prénom,nomutilisateur,motdepasse) => {
    setUsers(previousUsers => [
      ...previousUsers,
      { id: previousUsers.length + 1, nom,prénom,nomutilisateur, motdepasse }
    ])
  }

  const updateUser = (id,etat) => {
    const newUsers = users.map(user =>
        user.id === id ? { ...user ,etat : Number(etat)} : user
    )
    setUsers(newUsers)
    console.log(newUsers)
    console.log("update user")
  }

  // montrer useLocation, useHistory
// montrer nested routes : faire un lien vers chaque task 

  return (
    <div className="users-page">
      {/* <Menu /> */}
      {/* <Link to="/about" >Hello </Link> */}

      
   {/*    <TaskForm addTask={memoizedCallback} /> */}
        <div className="search">
          <input
            type="search"
            name="search"
            placeholder="search user by name"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </div>
        {loading ? (
          <div>Loading ... </div>
        ) : (
          <>
          {(
            <UsersList
              users={users}
              updateUser={updateUser}
            />
          )}
          {error.length!==0 && (<div>{error}</div>)}
          </>
        )}
      
    </div>
  )
}

export default UsersPage