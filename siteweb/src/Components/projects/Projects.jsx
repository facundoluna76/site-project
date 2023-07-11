import images from '../../assets/images'
import '../projects/projects.scss';

import React from 'react'

const Projects = () => {
  return (
    <section className="projects">
        <div className="container">
            <div className="projects__cont">
                <div className="projects__cont__item">
                    <div className="projects__cont__item__image">
                        <img src={images.wynwood} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects