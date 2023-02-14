import React,{useState,useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FirebaseContext} from '../../store/FirebaseContext';
import {
  getAuth,
  signInWithEmailAndPassword,
  // updateProfile
} from 'firebase/auth'

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const {Firebase} = useContext(FirebaseContext)
  const navigate= useNavigate()


  const auth=getAuth()

  const handleLogin=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(()=>{
      console.log('User logged in');
      navigate('/')
    }).catch((error)=>{
alert('Check your credential')
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button onClick={handleLogin}>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
