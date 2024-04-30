import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false)

const closeNavHandler = () => {
  if(window.innerWidth < 800){
    setIsNavShowing(false)
  }else
  setIsNavShowing(true)

}

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='nav__logo' onClick={closeNavHandler}>
          <img src='' alt=''/>
        </Link>
        {isNavShowing && <ul className="nav__menu">
          <li><Link to="/profile/sdfsdf" onClick={closeNavHandler}>Ridaa Nasir</Link></li>
          <li><Link to="/create" onClick={closeNavHandler}>created post</Link></li>
          <li><Link to="/authors" onClick={closeNavHandler}>Authors</Link></li>
          <li><Link to="/logout" onClick={closeNavHandler}>logout</Link></li>
        </ul>}
        <button className="nav_toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
        {isNavShowing ? <AiOutlineClose /> : <FaBars />}

        </button>
      </div>
    </nav>
  )
}

export default Header
