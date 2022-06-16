import React from 'react'
import './experience.css';
import { AiFillHtml5 } from 'react-icons/ai'
import { SiMysql, SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoDocker
 } from "react-icons/io5";

const Experience = () => {
  return (
    <section id="experience">
      <h2>HABILIDADES</h2>

      <div className="container experience_container">
        <div className="exp_frontend">
          <h2>Desenvolvedor Frontend</h2>
          <div className="exp_content">
            <article className="exp_details">
              <AiFillHtml5 className='exp_details-icon'/>
              <h4>HTML</h4>
              <span className='text-details'>Intermediário</span>
            </article>
            <article className="exp_details">
              <IoLogoCss3 className='exp_details-icon'/>
              <h4>CSS</h4>
              <span className='text-details'>Intermediário</span>
            </article>
            <article className="exp_details">
              <IoLogoJavascript className='exp_details-icon'/>
              <h4>JAVASCRIPT</h4>
              <span className='text-details'>Intermediário</span>
            </article>
            <article className="exp_details">
              <IoLogoReact className='exp_details-icon'/>
              <h4>REACT.JS</h4>
              <span className='text-details'>Intermediário</span>
            </article>
          </div>
        </div>
        <div className="exp_backend">
        <h2>Desenvolvedor Backend</h2>
          <div className="exp_content">
            <article className="exp_details">
              <IoLogoDocker className='exp_details-icon'/>
              <h4>DOCKER</h4>
              <span className='text-details'>Intermediário</span>
            </article>
            <article className="exp_details">
              <SiMysql className='exp_details-icon'/>
              <h4>MYSQL</h4>
              <span className='text-details'>Intermediário</span>
            </article>
            <article className="exp_details">
              <FaNodeJs className='exp_details-icon'/>
              <h4>NODEJS</h4>
              <span className='text-details'>Intermediário</span>
            </article>
            <article className="exp_details">
              <SiTypescript className='exp_details-icon'/>
              <h4>TYPESCRIPT</h4>
              <span className='text-details'>Intermediário</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
