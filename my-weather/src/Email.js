import React from 'react';
import storedData from './users.json';
function Email() {

  function pushLogin(e){
    e.preventDefault();
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    
    let checker= storedData.some((arrVal)=> { 
      return email === arrVal.email && password ===arrVal.password; 
  });

  if(checker===true){
    alert('You have logged in')
  }else{
    alert('Email and  Password mismatch')
  }



  }
    return (
            <form className="bg-modal" onSubmit={pushLogin}>
        <div className="form-inner">
            <p>Good to see you!</p>
          
          <br></br>
          <div className="form-group2">
            <input
              className="search-bar"
              placeholder="E-Mail"
              type="email"
              name="email"
              id="email"
              required
              
            />
</div>
<br></br>
          <div className="form-group2">
            <input
              className="search-bar"
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              required
             
            />
          
          <br></br>
          <div className="form-group1">
            <button type="submit" className="btn btn-primary shelf-cta">
              
              <span>Sign In</span>
            </button>
            </div>

          <br></br>
          <div className="form-group3">
            <input
             className="create account"
             placeholder="Create New Account"
             type="create account"
             name="create new account"
             id="create new account"
             required
            
             />
          </div>
          </div>
        </div>
      </form>
        
    )
}

export default Email;
