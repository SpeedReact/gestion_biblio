import React from "react"
import {  NavLink} from "react-router-dom"
import './AdminMenu.css'
import { BsBook,BsBookmarkCheck,BsBookmarkPlus,BsBookmarkDash} from "react-icons/bs";
import { AiOutlineAlignRight, } from "react-icons/ai"
import { FaUsers } from "react-icons/fa";


function AdminMenu() {
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
            <BsBook />
           <NavLink to="/admin/books" activeClassName="active"
            isActive={(_, { pathname }) =>
               pathname.match("/admin/books") || pathname === "/admin"
                }
                >
                 Livres
               </NavLink>{" "}
            </>
          </li>
          <li className="nav-item">
            <FaUsers />
            <NavLink to="/admin/users" activeClassName="active">
               utilisateurs
              </NavLink>
          </li>
          <li className="nav-item">
            <BsBookmarkCheck/>
             <NavLink to="/admin/emprunts" activeClassName="active">
                 Emprunts
               </NavLink>
          </li>
          
          <li className="nav-item">
            <BsBookmarkPlus/>
              <NavLink to="/admin/empruntsEnCours" activeClassName="active">
               Emprunts en cours
               </NavLink>
           </li>
          <li className="nav-item">
             <BsBookmarkDash/>
                 <NavLink to="/admin/empruntsEnRetard" activeClassName="active">
                   Emprunts en retard
                 </NavLink>
           </li>
          </ul>
        </div>
        </nav>
    </>
  )
}

export default AdminMenu