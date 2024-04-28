import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../css/profile.css'

import Avatar from '../images/mern-blog-assets-main/avatar15.jpg'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {

  const[avatar,setAvatar] = useState('')



  return (
    <section className='profile'>
      <div className="container profile__container">
        <Link to={`/,yposts/sdfsdf`} className="btn">My Posts</Link>

        <div className="profile__detail">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={Avatar} alt="" />
            </div>
            {/*form to update avatar/image */}
            <form className="avatar__form">
              <input type="file" name="avatar" id="avatar" onChange={e => setAvatar(e.target.files[0])} 
              accept='png, jpg, jpeg' />
              <label htmlFor='avatar'><FaEdit /></label>
            </form>
            <button className='profile__avatar-btn'><FaCheck /></button>
          </div>

          <h1>Ridaa Nasir</h1>
        </div>
      </div>
    </section>
  )
}

export default UserProfile
