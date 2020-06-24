import React, { useState ,useRef} from "react"
import './SignUp.css';
//import {Signup } from "../../services/users.service";
import { Row, Col ,message} from 'antd';
import {Signup } from "../../services/users.service";






function SignUp() {


  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [SignUp, setSignuP] = useState(false);

  const inputFirstName = useRef(null)
  const inputLastName = useRef(null)
  const inputUserName = useRef(null)
  const inputPassword = useRef(null)

  const [errorMsgFirstName , setErrorMsgFirstName] = useState("");
  const [errorMsgLastName , setErrorMsgLastName] = useState("");
  const [errorMsgUsername , setErrorMsgUsername] = useState("");
  const [errorMsgPassword , setErrorMsgPassword] = useState("");

  const warning = () => {
    message.warning('Nom utilisateur existe Déja');
  };

  const formValidation = () => {
    if(firstName===""){
      inputFirstName.current.focus()
      setErrorMsgFirstName("Fist name required")
      return false
    } else if(lastName===""){
      inputLastName.current.focus()
      setErrorMsgFirstName("")
      setErrorMsgLastName("Last name required")
      return false
    } else if(username===""){
      inputUserName.current.focus()
      setErrorMsgLastName("")
      setErrorMsgUsername("Username required")
      return false
    } else if(password===""){
      inputPassword.current.focus()
      setErrorMsgUsername("")
      setErrorMsgPassword("Password required")
      return false
    } else {
      setErrorMsgPassword("")
      return true
    }
    
  }

  const Sign = async () => {

      await formValidation()
      
      if(formValidation()) {
        try{
        const result = await Signup(firstName,lastName,username , password)
        if (result === "error"){
          warning()
          setUserName("")
          inputUserName.current.focus()
        }else{
          console.log(result)
          setSignuP(true);
        }
      
        }
        catch(e){
          console.log(e)
        }
      }
   
  }
  return (
    <>
    
    {SignUp ? ( 
      <>
      <div className="big-warning">
      <div className="login-icon">
            <img src={process.env.PUBLIC_URL + '/imgs/success.png'} alt="login img"/>
            <p className="success">Request sent successfully</p>
          </div>
          <h3>Wait until the admin accept your request </h3>
          
        </div>      
      </>
    ) : (
      <>
    
      <Row>
          <Col span={24}> 
           <div className="login-caption">
              <div className="login-icon">
                <img src={process.env.PUBLIC_URL + '/imgs/login-rounded-right.png'} alt="login img"/>
              </div>
              <h2>S'inscrire</h2>
           </div>
          </Col>
          <Col span={24}>
    
          
          <div className="signIn-form">
              <div className="input-form row">
                  <div className="col-md-12 input">
                     <label>First Name</label>
                     <input type="text" id="first_name" name="first_name" placeholder="→" required
                      onChange={e => setFirstName(e.target.value)}
                      ref={inputFirstName}
                      /> 
                       <p className="error">{errorMsgFirstName}</p>
                  </div>  
              </div>
              <div className="input-form row">
                  <div className="col-md-12 input">
                     <label>Last Name</label>
                     <input type="text" id="last_name" name="last_name" placeholder="→" required
                      onChange={e => setLastName(e.target.value)}
                      ref={inputLastName}
                      /> 
                      <p className="error">{errorMsgLastName}</p>
                  </div> 
              </div>
              <div className="input-form row">
                  <div className="col-md-12 input">
                     <label>Username</label>
                     <input type="text" id="username" name="username" placeholder="→" required 
                     onChange={e => setUserName(e.target.value)}
                     ref={inputUserName}
                     /> 
                     <p className="error">{errorMsgUsername}</p>
                  </div> 
              </div>
              <div className="input-form row">
                  <div className="col-md-12 input">
                     <label>Password</label>
                     <input type="password" id="password" name="password" placeholder="→" required 
                     onChange={e => setPassword(e.target.value)}
                     ref={inputPassword}
                     /> 
                     <p className="error">{errorMsgPassword}</p>
                  </div> 
              </div>
              <div className="input-form row">
                  <div className="col-md-12 login-btn">
                    <button onClick={Sign}>Sign Up</button>
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

export default SignUp;
