import React from 'react'
import './Hero.scss';

const logo_hero = './src/assets/an-agency-for-agencies.svg';
const hero_arrow = './src/assets/arrow.svg';

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero__cont">
            <div className="hero__cont__image">
                <img src={logo_hero}/>
            </div>
            <button className="hero__arrow">
                <img src={hero_arrow}/>
            </button>
        </div>
    </section>
  )
}

export default Hero