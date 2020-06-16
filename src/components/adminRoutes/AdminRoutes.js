import React from "react"
// import "./App.css"
import BooksPage from "../booksPage/BooksPage"
import UsersPage from "../usersPage/UsersPage"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom"
import BookDetails from "../bookDetails/BookDetails"
import UserDetails from "../userDetails/UserDetails"



function AdminRoutes() {
    let { path } = useRouteMatch()
  return (
    <div className="teacher-routes">
      {/* <Router> */}
     
        <Switch>
          <Route exact path={`${path}/`}>
            <Redirect to={`${path}/books`} />
          </Route>
        
          <Route exact path={`${path}/books`}>
            <BooksPage />
          </Route>

          <Route exact path={`${path}/books/:bookId`}>
            <BookDetails />
          </Route>

          <Route exact path={`${path}/users`}>
            <UsersPage />
          </Route>

          <Route exact path={`${path}/users/:userId`}>
            <UserDetails />
          </Route>


        </Switch>
      

      {/* </Router> */}
    </div>
  )
}

export default AdminRoutes