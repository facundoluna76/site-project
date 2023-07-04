import React from 'react';
import './Header.scss';

const logo = './src/assets/bracketmedia.svg';

const Header = () => {
  return (
    <header className='header'>
        <div className="header__cont">
            <a href="#" className="header__logo">
                <img src={logo}/>
            </a>
            <nav className="nav__content">
                <a href="#">About us</a>
                <a href="#">Services</a>
                <a href="#">Who we are</a>
                <a href="#">Our work</a>
                <a href="#">Blog</a>
                <a href="#">Talk to us</a>
            </nav>
        </div>
    </header>
  )
}

export default Header;