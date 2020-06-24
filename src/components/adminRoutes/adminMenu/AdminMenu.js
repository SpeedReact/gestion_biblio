import React from "react"
import {  NavLink} from "react-router-dom"
import './AdminMenu.css'



function AdminMenu() {
  return (
    <>
    <div className="admin-menu">
    <ul>
      <li>
        <NavLink to="/admin/books" activeClassName="active"
        isActive={(_, { pathname }) =>
            pathname.match("/admin/books") || pathname === "/admin"
          }
        >
          Books List
        </NavLink>{" "}
      </li>
      <li>
        <NavLink to="/admin/users" activeClassName="active">
          users List
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin/emprunts" activeClassName="active">
         Enprunts
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin/empruntsEnCours" activeClassName="active">
         Enprunts en cours
        </NavLink>
      </li>
      <li>
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