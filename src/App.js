import React from "react"
import "./App.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import AdminRoutes from "./components/adminRoutes/AdminRoutes"

function App() {
  
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminRoutes />
          </Route>
          
        </Switch>
      </Router>
    </div>
  )
}

export default App