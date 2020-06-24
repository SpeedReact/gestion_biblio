import React from "react"
import { Row, Col } from 'antd';
import BooksPageUser from "./booksPageUser/BooksPageUser"
import BooksEmprunterPage from "./booksEmprunterPage/BooksEmprunterPage"
import UserMenu from "./userMenu/UserMenu"


import {
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom"



function UserRoutes() {

  let { path } = useRouteMatch()
  
  return (
    <div>
      <Row>
      <Col span={3} >
        <UserMenu/>
      </Col>
     <Col span={21}>
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
        
     </Col>
        
      </Row>
    
    
       
    </div>
  )
}

export default UserRoutes