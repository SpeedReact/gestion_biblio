import React,{useState , useEffect}  from "react"
import "./Emprunt.css"
import "antd/dist/antd.css";
import { Card } from 'antd';
import { fetchBookById} from "../../services/books.service"
import { fetchUserById} from "../../services/users.service"
export default function Emprunt({
  dateEmprunt,
  dateRetour,
  bookId,
  userId
}) {


  const [book, setBook] = useState({})
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      
      const resultBook = await fetchBookById(bookId)
      setBook(resultBook)
      const resultUser = await fetchUserById(userId)
      setUser(resultUser)
     
    }
    console.log("useEffect")

    fetchData()
  }, [bookId,userId])
  

  return (
    <div>
      <Card
            hoverable
           
            >
              <p> date Emprunt : {dateEmprunt}</p>
              <p>date retour : {dateRetour}</p>
              <strong>Livre : </strong>
              <p>Libéllé livre  : {book.libéllé}</p>
              <p>Auteur livre  : {book.auteur}</p>
              <strong>Adhérent : </strong>
              <p>Nom adhérent : {user.nom}</p>
              <p>Prénom adhérent : {user.prénom}</p>
              
          </Card>
        
         
   
    </div>
  )
}

