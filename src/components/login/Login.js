import React,{useState,useRef } from 'react';
import {BrowserRouter  as Router  ,Redirect} from "react-router-dom";
import './Login.css';
import { Row, Col } from 'antd';
import {Authentification } from "../../services/users.service";






function Login() {
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");
  const [authentificated , setAuthentificated] = useState(false);
  const [error, setError] = useState(false);
  const [user , setUser] = useState({});
  const [accept , setAccept] = useState(false);

  const inputUserName = useRef(null)
  const inputPassword = useRef(null)
  const [errorMsgUsername , setErrorMsgUsername] = useState("");
  const [errorMsgPassword , setErrorMsgPassword] = useState("");

  const handleUsername = (e)=>{
    setUsername(e.target.value);
  }
  const handlePassword = (e)=>{
     setPassword(e.target.value);
  }
  
   const Auth = async (e) => {
    try{
      if(username ===""){
        setErrorMsgUsername("Username required")
        inputUserName.current.focus()
      }
      else if(password ===""){
        setErrorMsgPassword("Password required")
        setErrorMsgUsername("")
        inputPassword.current.focus()
      }
   else {
    setErrorMsgUsername("")
    setErrorMsgPassword("")
    const result = await Authentification(username , password)

    if (result.length === 0){
      setError(true);
      setAccept(false);
      setUsername("")
      setPassword("")
    }else{
      setUser(result);
      setAuthentificated(true);
      setError(false);
      if (result.etat === 1){
        console.log("etat"+result.etat)
        setAccept(true);
        localStorage.setItem('userId', result.id);
        window.location.reload(false);
      }else{
        
        setAccept(false);
      }
      
     
    }
  }
    
    }
    catch(e){
      console.log(e)
    }
  }


 
  
  return (
    <>
    
    {authentificated ? (
      <>
      {accept ? (
      <>
        {user.role === "admin" ? (
          <>
          <Router exact path="/admin/books">
            <Redirect  to="/admin/books"/>
          </Router>
          </>) : (
            <>
            
             <Router>
             <Redirect  to="/user/accueil"/>
             </Router>
            </>
          )}
      </>)
      : (
      <>
            <div className="big-warning">
            <div className="login-icon">
                  <img src={process.env.PUBLIC_URL + '/imgs/error.png'} alt="login img"/>
                  <p className="success">Your account is not active</p>
                </div>
                <h2>Try later</h2>
              </div>      
      </>
      )}
      
         
  
   
      
      </>
       
     ) : (
       <>

       <Row>
           <Col span={24}>
            <div className="login-caption">
              {error ? (
                <>
                <div className="login-icon">
                  <img src={process.env.PUBLIC_URL + '/imgs/error.png'} alt="login img"/>
                  <p>Please check your information</p>
                </div>
                <h2>Try again</h2>
               </>

                ) : (
                  <>
                   <div className="login-icon">
                     <img src={process.env.PUBLIC_URL + '/imgs/login-rounded-right.png'} alt="login img"/>
                   </div>
                   <h2>Login</h2>
                  </>
                )}
               
            </div>
           </Col>
           <Col span={24}>
            
           <div className="signIn-form">
               <div className="input-form row">
                   <div className="col-md-12 input">
                      <label>username</label>
                      <input type="text" name="_username" placeholder="→" 
                      value={username} 
                      ref={inputUserName}
                      onChange={handleUsername} required/> 
                      <p className="error">{errorMsgUsername}</p>
                   </div> 
               </div>
               <div className="input-form row">
                   <div className="col-md-12 input">
                      <label>password</label>
                      <input type="password"  name="_password" placeholder="→" 
                      value={password} 
                      ref={inputPassword}
                      onChange={handlePassword} required/> 
                      <p className="error">{errorMsgPassword}</p>
                   </div> 
               </div>
               <div className="input-form row">
                   <div className="col-md-12 login-btn">
                     <button type="submit" onClick={Auth}>login</button>
                   </div> 
               </div>
            </div>
            
           </Col>
       </Row>
      
       </>
     )}
    </>
  );
}

export default Login;
