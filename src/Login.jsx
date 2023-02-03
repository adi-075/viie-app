import React from 'react';
import viie from './VIIE.png';

function login() {
  return (
    <div className='box'>
       <div className='banner'>
        <br />
        <img src={viie} alt="VIIE LOGO"/>
      </div>
    
      <div className='form'>
        <h1>Login</h1>
        <br />

        <div className='inputBox'>
          <span>E-MAIL</span>
          <br />
          <i></i>
          <input type="text" required="required" />
        </div>

        <div className='inputBox'>
          <span>Password</span>
          <br />
          <i></i>
          <input type="text" required="required" />
        </div>

        <div className='links'>
          <a href="#">Forgot Password</a>
        </div>
       <input type="submit" value="Sign In" style={{ backgroundColor: '#6b0707', padding: '10px 20px', color: 'white', borderRadius: '5px', border: 'none', fontWeight: 'bold' }} />
        
      </div>
      </div>
  )
}

export default login