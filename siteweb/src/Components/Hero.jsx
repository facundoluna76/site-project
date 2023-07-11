import React from 'react'
import './Hero.scss';
import images from '../assets/images'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero__cont">
            <div className="hero__cont__image">
                <img src={images.anagencyforagencies}/>
            </div>
            <button className="hero__arrow">
                <img src={images.arrow}/>
            </button>
        </div>
    </section>
  )
}

export default Hero