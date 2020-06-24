import Axios from 'axios'
    
  export const fetchUsers = async () => {
    const result = await Axios.get(
      "http://localhost:8000/users", 
    )
    return(result.data)
      
    
  }


  export const updateUser = async (id, etat) => {
       await Axios.put(
      "http://localhost:8000/users/",{id,etat}
      
    )
  }
  
  export const fetchUserById=async(userId)=>{
    const result = await Axios.get(
      "http://localhost:8000/users/" + userId
    )
    return result.data
 }


 
 export const Authentification = async(username,password) => {
  const result = await Axios.put(
    "http://localhost:8000/users/authentification" ,{username,password}
  )
  return result.data

  
}

export const Signup = async (firstName,lastName,username,password) => {
  const result = await Axios.post(
    "http://localhost:8000/users" ,{firstName,lastName,username,password}
  )
  return result.data
}
  


