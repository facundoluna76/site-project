import React from 'react'
import './Hero.scss';

const logo_hero = './src/assets/an-agency-for-agencies.svg';

const Hero = () => {
  return (
    <section className='hero bg-red-300'>
        <div className="hero__cont">
            <div className="hero__cont__image">
                <img src={logo_hero}/>
            </div>
        </div>
    </section>
  )
}

export default Hero