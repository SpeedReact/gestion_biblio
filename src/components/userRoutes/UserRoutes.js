import React from "react"
import { Row, Col } from 'antd';
import BooksPageUser from "./booksPageUser/BooksPageUser"
import BooksEmprunterPage from "./booksEmprunterPage/BooksEmprunterPage"
import UserMenu from "./userMenu/UserMenu"
import "../adminRoutes/AdminRoutes.css"


import {
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom"



function UserRoutes() {

  let { path } = useRouteMatch()
  
  return (
    <div className="pages-container">
    <div className="container">
      <div className="row navigation-menu">
        <UserMenu/>
        </div>
    <div className="admin-routes">
    
      <Row>
     
     <Switch>
          <Route exact path={`${path}/`}>
            <Redirect to={`${path}/accueil`} />
          </Route>

          <Route exact path={`${path}/accueil`}>
            <BooksPageUser />
          </Route>
        
          <Route exact path={`${path}/books`}>
            <BooksEmprunterPage />
          </Route>


        </Switch>
        
   
        
      </Row>
    
       </div>
      </div>
    </div>
  )
}

export default UserRoutes