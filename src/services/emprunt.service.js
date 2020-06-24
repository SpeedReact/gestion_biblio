import Axios from 'axios'
 
  export const fetchEmpruntsById=async(userId)=>{
    
    const result = await Axios.get(
      "http://localhost:8000/emprunts/" + userId
    )
   
    return result.data 
    
  }


  export const fetchEmprunts=async()=>{
    const result = await Axios.get(
      "http://localhost:8000/emprunts/tous", 
    )
    return(result.data)
    
  }

  export const fetchEmpruntsEnCours=async()=>{
    const result = await Axios.get(
      "http://localhost:8000/emprunts/enCours", 
    )
    return(result.data)
    
  }

  export const fetchEmpruntsEnRetard=async()=>{
   
    const result = await Axios.get(
      "http://localhost:8000/emprunts/enRetard", 
    )
    return(result.data) 
    
  }



  export const empruntBook=async(bookId,userId)=>{
   
    const result = await Axios.post(
      "http://localhost:8000/emprunts",{bookId,userId} 
    )
    console.log(result.data)
    return(result.data) 
  
    
  }


  export const retournerBook=async(bookId,userId)=>{
   
    const result = await Axios.put(
      "http://localhost:8000/emprunts",{bookId,userId} 
    )
    
    return(result.data) 
  
    
  }
   
    
    