import React from 'react';
import Account from './Account'

import { auth } from '../service/firebase'

import '../App.css';

const Home = ({ user }) => {
  return (
    <div className="home">
      <h1>Hello, <span></span>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
      <Account user={user}/>
    </div>
  )
}

export default Home;