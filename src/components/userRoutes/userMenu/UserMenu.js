import React from "react"
import {  NavLink} from "react-router-dom"
import './UserMenu.css'



function UserMenu() {
  return (
    <>
    <div className="user-menu">
    <ul>
      <li>
        <NavLink to="/user/accueil" activeClassName="active"
        isActive={(_, { pathname }) =>
            pathname.match("/user/accueil") || pathname === "/user"
          }
        >
          Accueil
        </NavLink>{" "}
      </li>
      <li>
        <NavLink to="/user/books" activeClassName="active">
         Mes Livres
        </NavLink>
      </li>
      
    </ul>
    </div>
    </>
  )
}

export default UserMenu