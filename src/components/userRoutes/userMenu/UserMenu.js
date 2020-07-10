import React from "react"
import {  NavLink} from "react-router-dom"
import './UserMenu.css'
import {BsBook } from "react-icons/bs";
import { AiOutlineAlignRight, } from "react-icons/ai"
import {  FaHome} from "react-icons/fa";



function UserMenu() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light ">
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class=""><AiOutlineAlignRight/></span>
       </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <>
            <FaHome/>
            <NavLink to="/user/accueil" activeClassName="active"
            isActive={(_, { pathname }) =>
            pathname.match("/user/accueil") || pathname === "/user"
          }
        >
          Accueil
        </NavLink>{" "}
            </>
          </li>
          <li className="nav-item">
           <BsBook />
          <NavLink to="/user/books" activeClassName="active">
            Mes Livres
        </NavLink>
          </li>
         
          </ul>
        </div>
    </nav>
    </>
    
  )
}

export default UserMenu