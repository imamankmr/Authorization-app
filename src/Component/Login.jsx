import React from 'react'



const Login = () => {
  return (
    <>
     <h1>Login here</h1>
      <form>
        <label htmlFor="">Enter your email</label>
        <input type="email" placeholder="Enter email" />
        <br />
        <label htmlFor="">Enter your Password</label>
        <input type="email" placeholder="Enter Password" />
        <br />
        <button  type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
