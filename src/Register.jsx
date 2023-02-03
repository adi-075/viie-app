import React from 'react';
import viie from './VIIE.png';

function register() {
  return (
    <div className='box'>

       <div className='banner'>
        <br />
        <img src={viie} alt="VIIE LOGO"/>
      </div>
      
      <div className='form'>
        {/* style={{ backgroundImage: `url(${viie})` }} */}
        <h1 style={{ textAlign: 'center' }}>Create New Account</h1>
        <br />
        <h3 style={{ textAlign: 'center' }}>Already have one? <span style={{color: '#0E86D4'}}>Log in</span> here</h3>

        <div className='inputBox'>
          <span>ROLL NO</span>
          <br />
          <input type="text" required="required" />
          <i></i>
        </div>

        <div className='inputBox'>
          <span>E-MAIL</span>
          <br />
          <i></i>
          <input type="text" required="required" />
        </div>

        <div className='inputBox'>
          <span>PASSWORD</span>
          <br />
          <i></i>
          <input type="text" required="required" />
        </div>
        <br />

        <input type="submit" value="Sign Up" style={{backgroundColor: '#6b0707', padding: '10px 20px',color: 'white',borderRadius:'5px' ,border:'none',fontWeight:'bolder'}}/>
      </div>
    </div>
    
  )
}

export default register