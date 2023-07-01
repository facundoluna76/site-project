import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center w-full p-4'>
        <div className="logo">
            <h1 className=''>Bracketmedia</h1>
        </div>
        <nav className="bg-red-600 flex-1">
        <div>Nav</div>
        </nav>
    </header>
  )
}

export default Header;