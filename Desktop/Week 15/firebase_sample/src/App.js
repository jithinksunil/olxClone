import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

import {
  getAuth,
  onAuthStateChanged
} from 'firebase/auth'

import Post from './store/PostContext'
import SignupPage from './Pages/SignupPage'
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage'
import CreatePage from './Pages/CreatePage'

import { AuthContext  } from './store/FirebaseContext';

function App() {
  const auth=getAuth()
  const {setUser} =useContext(AuthContext)
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
       
        console.log('logged in');
      }
    })
  })
  return (
    <div>
      <Post>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/signup' element={<SignupPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/create' element={<CreatePage />}/>
        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;