import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login';
import SignUp from './SignUp';

const Home = () => {
  return (
    <div>
      <h1>This is home page </h1>
     
      <ul>
        <li><Link to='/login'> Click here to Login</Link></li>
        <li><Link to='/signup'>Click here to SignUp</Link></li>
        <li><Link to='/aboutus'>about us</Link></li>
      </ul>
    </div>
  )
}

export default Home
