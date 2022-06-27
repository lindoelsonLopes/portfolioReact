import React, { useRef } from 'react'
import Modal from '../Modal/Modal';
import './aboutMe.css';
import {FaAward} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'
import {HiAcademicCap} from 'react-icons/hi'

const AboutMe = () => {
  const modalExperience = useRef()
  const modalFormation = useRef()
  const modalProject = useRef()
  return (
    <section className="about">
      <h1>Sobre Mim</h1>
      <div className="container about_container">
        <div className="about_me">
          <div className="aboute_me-text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et odit aspernatur accusamus non repudiandae sequi tenetur hic totam architecto corrupti, odio explicabo ratione ullam dignissimos modi suscipit. Ratione, quo qui!</p>
          </div>
      <button className="btn_curriculum">
        Download CV
      </button>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experiência</h5>
              <button onClick={() => modalExperience.current.open()} className="btn-cards">Ver</button>
            </article>

            <article className="about_card">
              <HiAcademicCap className="about_icon" />
              <h5>Formação</h5>
              <button onClick={() => modalFormation.current.open()} className="btn-cards">Ver</button>
            </article>

            <article className="about_card">
              <AiFillFolderOpen className="about_icon" />
              <h5>Projetos</h5>
              <button onClick={() => modalProject.current.open()} className="btn-cards">Ver</button>
            </article>
          </div>
          <Modal ref={modalExperience}>
            <button
              type="button"
              className="btn-close"
              onClick={() => modalExperience.current.close()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <p>Em construção..</p>
          </Modal>

          <Modal ref={modalFormation}>
            <button
              type="button"
              className="btn-close"
              onClick={() => modalFormation.current.close()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <p>Em construção..</p>
          </Modal>

          <Modal ref={modalProject}>
            <button
              type="button"
              className="btn-close"
              onClick={() => modalProject.current.close()}npm i gh-pages
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <p>Em construção.</p>
          </Modal>
        </div>
        
      </div>             
     
    </section>
  )
}

export default AboutMe