import React from "react"
import {  NavLink} from "react-router-dom"
import './AdminMenu.css'



function AdminMenu() {
  return (
    <>
    <div className="admin-menu">
    <ul>
      <li>
        <img src={process.env.PUBLIC_URL + '/imgs/book.png'} alt="books"/>
        <NavLink to="/admin/books" activeClassName="active"
        isActive={(_, { pathname }) =>
            pathname.match("/admin/books") || pathname === "/admin"
          }
        >
            Books List
        </NavLink>{" "}
      </li>
      <li>
      <img src={process.env.PUBLIC_URL + '/imgs/user.png'} alt="books"/>

        <NavLink to="/admin/users" activeClassName="active">
          Users List
        </NavLink>
      </li>
     
      <li>
      <img src={process.env.PUBLIC_URL + '/imgs/register.png'} alt="books"/>
        <NavLink to="/admin/emprunts" activeClassName="active">
         Enprunts
        </NavLink>
      </li>
      <li>
      <img src={process.env.PUBLIC_URL + '/imgs/register.png'} alt="books"/>
        <NavLink to="/admin/empruntsEnCours" activeClassName="active">
         Enprunts en cours
        </NavLink>
      </li>
      <li>
      <img src={process.env.PUBLIC_URL + '/imgs/register.png'} alt="books"/>
        <NavLink to="/admin/empruntsEnRetard" activeClassName="active">
         Enprunts en retard
        </NavLink>
      </li>
    </ul>
    </div>
    </>
  )
}

export default AdminMenu