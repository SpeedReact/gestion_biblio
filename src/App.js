import React from "react"
import "./App.css"
import LoginLayout from "./components/loginLayout/LoginLayout"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import AdminRoutes from "./components/adminRoutes/AdminRoutes"
import UserRoutes from "./components/userRoutes/UserRoutes"

function App() {
  
  return (
    <div className="app">
      <Router>
      <Route exact path="/">
           <LoginLayout />
         </Route>
        <Switch>
        
          <Route  path="/admin">
            <AdminRoutes />
          </Route>
          <Route  path="/user">
            <UserRoutes />
          </Route>
          
          
        </Switch>
      </Router>
    </div>
  )
}

export default App