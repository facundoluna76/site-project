import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
        <div className="header__cont">
            <div className="header__content">
                <h1 className='header__cont__logo'>Bracketmedia</h1>
            </div>
            <nav className="nav__content">
                <div>Nav</div>
            </nav>
        </div>
    </header>
  )
}

export default Header;