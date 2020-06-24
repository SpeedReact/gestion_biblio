import React , { useState } from 'react';
import './Login_layout.css';
import Login from '../login/Login';
import SingnUp from '../signUp/SignUp';
function LoginLayout() {
 const [ModeSign , setModeSign] = useState(false);

  return (
    <>
      <div className="login-layout">
      {!ModeSign ? (
          <>
            <Login />
            <div className="login-layout-caption">
                 <p> &nbsp; Or &nbsp; </p>
                 <button onClick = {()=>{setModeSign(true)}}>Sign-Up</button>
            </div>
          </>
      ) : (
        <>
         <SingnUp/>
         <div className="login-layout-caption">
                 <p> &nbsp; Or &nbsp; </p>
                 <button onClick = {()=>{setModeSign(false)}}>Login</button>
          </div>
        </>


      )}
      </div>
    </>
  );
}

export default LoginLayout;
