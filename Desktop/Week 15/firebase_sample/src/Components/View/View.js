import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';
import { collection, getDocs ,getFirestore } from "firebase/firestore";

import './View.css';
function  View() {
  const [userDetails,setUserDetails]=useState()
  const {postDetails}= useContext(PostContext)
  const {Firebase}= useContext(FirebaseContext)
  const db = getFirestore(Firebase)
  useEffect(()=>{
    console.log(postDetails);
    const {userId}= postDetails
    // const colRef = collection(db, "user");
    // console.log(colRef);
    getDocs(collection(db, "users")).where('id','===',userId).get().then((res)=>{
res.forEach(doc=>{
  setUserDetails(doc.data())
})
console.log(res);
    }).catch((error)=>{
      console.log(error.message);
    })
  },[])




 
  

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src="../../../Images/R15V3.jpg"
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; 250000 </p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
}
export default View;
