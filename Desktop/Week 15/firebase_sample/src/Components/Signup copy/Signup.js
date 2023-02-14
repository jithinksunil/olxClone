import React,{useState,useContext} from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext} from '../../store/FirebaseContext';
import './Signup.css';
import { Link,useNavigate} from 'react-router-dom';
// import Logo from '../../olx-logo.png';

import {
  getFirestore , collection , getDocs ,addDoc
  }from 'firebase/firestore'
  import {
      getAuth,
      createUserWithEmailAndPassword,
      updateProfile
  } from 'firebase/auth'

  import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


export default function Signup() {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate();
  const {Firebase} = useContext(FirebaseContext)
  const db = getFirestore(Firebase);

 







  const auth=getAuth()

  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(username);

    createUserWithEmailAndPassword(auth,email, password)
      .then((cred) => {
        updateProfile(auth.currentUser, {
          displayName: username})
          .then(()=>{
            console.log(auth.currentUser);
            addDoc(collection(db,"users"), {
              id: cred.user.uid,
              username:username,
              phone:phone
            }).then(()=>{
              console.log('User added to database')
              navigate('/login')
            }
            ).catch((err)=>{
              console.log(err.message)
            }
            ) 
          }) 
        console.log(cred.user);
      })
      .catch((err)=>{
        console.log(err.message);
      });

  };


 


  
  



  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
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
          <button onClick={handleSubmit} >Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
