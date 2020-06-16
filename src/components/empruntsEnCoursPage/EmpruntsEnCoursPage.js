import React, { useState, useEffect } from "react"
import "./EmpruntsEnCoursPage.css"
import EmpruntsList from "../empruntsList/EmpruntsList"

import { fetchEmpruntsEnCours } from "../../services/emprunt.service"

function EmpruntsEnCoursPage() {
  const [emprunts, setEmprunts] = useState([])
  const [loading, setLoading] = useState(false)

  const [error, setError]=useState("")

  
  useEffect(() => {
    const fetchData = async () => {
      try{
      setLoading(true)
     
      const result = await fetchEmpruntsEnCours()
      setEmprunts(result)
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


  // montrer useLocation, useHistory
// montrer nested routes : faire un lien vers chaque task 

  return (
    <div className="emprunts-page">
      
        {loading ? (
          <div>Loading ... </div>
        ) : (
          <>
          {(
            <EmpruntsList
              emprunts={emprunts}
            />
          )}
          {error.length!==0 && (<div>{error}</div>)}
          </>
        )}
      
    </div>
  )
}

export default EmpruntsEnCoursPage