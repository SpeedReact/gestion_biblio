import React from "react"
import { Row, Col } from 'antd';
import './AdminRoutes.css'
import BooksPage from "../booksPage/BooksPage"
import UsersPage from "../usersPage/UsersPage"

import AdminMenu from "./adminMenu/AdminMenu"

import EmpruntsPage from "../empruntsPage/EmpruntsPage"
import EmpruntsEnCoursPage from "../empruntsEnCoursPage/EmpruntsEnCoursPage"
import EmpruntsEnRetardPage from "../empruntsEnRetardPage/EmpruntsEnRetardPage"
import UserDetails from "../userDetails/UserDetails"

import {
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom"





function AdminRoutes() {
    let { path } = useRouteMatch()
    
  return (
    <div className="admin-routes">
      <Row>
        <Col span={3} >
        <AdminMenu/>
        </Col>
        
      {/* <Router> */}
      <Col span={21}>
        <div className="container">
        <Switch>
          <Route exact path={`${path}/`}>
            <Redirect to={`${path}/books`} />
          </Route>
        
          <Route exact path={`${path}/books`}>
            <BooksPage />
          </Route>

          <Route exact path={`${path}/users`}>
            <UsersPage />
          </Route>

          <Route exact path={`${path}/users/:userId`}>
            <UserDetails />
          </Route>

          <Route exact path={`${path}/emprunts`}>
            <EmpruntsPage />
          </Route>

          <Route exact path={`${path}/empruntsEnCours`}>
            <EmpruntsEnCoursPage />
          </Route>

          <Route exact path={`${path}/empruntsEnRetard`}>
            <EmpruntsEnRetardPage />
          </Route>


        </Switch>
        </div>
        </Col>
        </Row>
      {/* </Router> */}
    </div>
  )
}

export default AdminRoutes