import React, {useState} from 'react';
import './Header.scss';
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import images from '../assets/images'

const Header = () => {
  const [showmenu, setShowMenu] = useState(false);
  return (
    <header className='header'>
        <div className="header__cont">
            <a href="#" className="header__logo">
                <img src={images.bracketmedia}/>
            </a>
            <nav className={`${showmenu ? "left-0" : "-left-full"} nav__content`}>
                <button onClick={()=>setShowMenu(!showmenu)} className='close'><RiCloseLine /></button>
                <a href="#">About us</a>
                <a href="#">Services</a>
                <a href="#">Who we are</a>
                <a href="#">Our work</a>
                <a href="#">Blog</a>
                <a href="#">Talk to us</a>
            </nav>
            <button onClick={()=>setShowMenu(!showmenu)} className='p-2'><RiMenuFill/></button>
        </div>
    </header>
  )
}

export default Header;