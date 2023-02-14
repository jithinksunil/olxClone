import React, { Fragment ,useState,useContext } from 'react';
import './Create.css';
import Header from '../Header/Header'

import { AuthContext,FirebaseContext } from '../../store/FirebaseContext'
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytes ,getDownloadURL} from "firebase/storage";
import { collection, addDoc ,getFirestore} from "firebase/firestore"; 

const Create =  () => {
 
  const navigate=useNavigate()
  const {Firebase} = useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  const db = getFirestore(Firebase);
  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState(null)
  const handleSubmit= async()=>{
  const date= new Date()
  const uid= Math.floor(Math.random() * 10000)
  const storage = getStorage();

    if(user){

      console.log('skljfksjd');
      const storageRef =ref(storage,`/images/${image.name+uid+Date.now()}`);
      console.log('skljfksjd');
      const snapshot= await uploadBytes(storageRef, image)
         console.log('Image uploaded');
         const imageurl= await getDownloadURL(snapshot.ref)
       await  addDoc(collection(db,"products"),{
           user:user.uid,
           name:name,
           category:price,
           price:price,
           imageurl,
           date:date.toDateString()
 
         })
         console.log('0roduct added to database')
    }else{
      console.log('Unauthorised access restricted');
    }
     navigate('/')
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" 
            type="number" 
            value={price}
              onChange={(e)=>setPrice(e.target.value)}
            id="fname" 
            name="Price" />
            <br />
         
          <br />
          <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
        
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button className="uploadBtn" onClick={handleSubmit} >upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
