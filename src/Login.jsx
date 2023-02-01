import React from 'react'

function login() {
  return (
    <div className='box'>
      <div className='form'>
        <h2>Log In</h2>
        <div className='inputBox'>
          <input type="text" required="required" />
          <span>Username</span>
          <i></i>
        </div>

        <div className='inputBox'>
          <input type="text" required="required" />
          <span>Password</span>
          <i></i>
        </div>

        <div className='links'>
          <a href="#">Forgot Password</a>
          <a href="#">Sign Up</a>
        </div>

        <input type="submit" value="Login" />
      </div>
      </div>
  )
}

export default login