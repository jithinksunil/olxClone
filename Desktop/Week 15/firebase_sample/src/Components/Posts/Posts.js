import React, { useContext, useState } from 'react';
import { collection, getDocs,getFirestore } from "firebase/firestore";

import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';
import { useNavigate } from 'react-router-dom';


function Posts() {
  const navigate=useNavigate()

  const {Firebase} = useContext(FirebaseContext)
  const db = getFirestore(Firebase);

  const [products,setProducts]= useState([])
  const {setPostDetails} = useContext(PostContext)
  getDocs(collection(db, "products")).then((querySnapshot)=>{
    const allpost=querySnapshot.docs.map((doc) => {
    return{
      ...doc.data(),
      id:doc.id
    }
  });
  setProducts(allpost)

}
)

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards" onClick={()=>{
          setPostDetails(products)
          navigate('/view')

        }}>


        {
        products.map((product)=>{
          return(
            <div key={product.id} className="card" >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.imageurl} alt="product" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;{product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.date}</span>
            </div>
          </div>
         ) })
          
            }




        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">



          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}

export default Posts;
