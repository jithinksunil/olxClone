import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/FirebaseContext';
import {
  getAuth,
  signOut
} from 'firebase/auth'

function Header() {
  const auth=getAuth()
  const {user,setUser}=useContext(AuthContext)
  return (
    <div className="headerParentDiv"  style={{ width: '96vw' }}>
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
        <Link to='/login'>
        <span>{user ? user.displayName : 'Login'}</span>
        </Link>
          <hr />
        </div>
        { user &&  <Link><span onClick={()=>{
          signOut(auth).then(() => {
            console.log('user logged out');
            setUser('')
          }).catch((error) => {
            console.log(error);
          });
        }} >Logout</span></Link>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link to='/create'>
            <span>SELL</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
