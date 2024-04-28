import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "../css/register.css"


const Login = () => {
const[userData, setUserData] = useState({
  
  emaiil:"",
  password:"",
  
})
const changeInputHandler = (e) => {
  setUserData(prevState=>{
    return{...prevState, [e.target.name]: e.target.value}
  })

}

  return (
    <section className="login">
      <div className="container">
        <h2>sign in</h2>
        <form className="form login__form">
          <p className="form__error-message">This is an error message</p>
          <input type="text" placeholder='Email' name='email'  value={userData.email} onChange={changeInputHandler} autoFocus/>
          <input type="password" placeholder='Password' name='password'  value={userData.password} onChange={changeInputHandler}/>
          <button type='submit' className='btn primary'>login</button>
          <small>Don't  have an account? <Link to="/register"> Sign up</Link></small>
        </form>
      </div>
    </section>
  )
}

export default Login

