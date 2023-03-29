import React from 'react'
import { Link } from 'react-router-dom';
import {auth} from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const Logout = () => {
    auth.signOut();
    navigate('/');
  }
  return (
    <div className='navbar'>
        <Link  className='navbar links' to={'/'}>Home</Link>
        {!user?(<Link  className='App-link' to={'/login'}>Login</Link>):(
          <div>
          <Link  className='navbar links' to={'/create-post'}>Create Post</Link>
          <p className='user p'>{user?.displayName}</p>
          <img className='user img' src={user?.photoURL || ""} width="50" height="50" alt="profile" />
          <button onClick={Logout}>Logout</button>
          </div>)
        }
    </div>
  )
}

export default Navbar;