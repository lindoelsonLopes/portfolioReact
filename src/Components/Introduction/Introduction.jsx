import React from 'react';
import './introduction.css';
import Github from '../images/github.png';
import Linkedin from '../images/linkedin.png';
import Instagram from '../images/instagram.png';

const Introduction = () => {
  return (
    <div className="intro">
      <div className="intro_left">
        <div className="intro_name">
          <span>Olá! Eu sou </span>
          <span>Lindoelson Lopes</span>
          <span>Estudante de Desenvolvimento Web FullStack.</span>
        </div>
        <button className="i_btn">Contrate-me!</button>
        <div className="intro_social">
        <ul>
        <li><a href="1"><img src={Instagram} alt="" /></a></li>
        <li><a href="2"><img src={Linkedin} alt="" /></a></li>
        <li><a href="3"><img src={Github} alt="" /></a></li>
      </ul> 
        </div>
      </div>
      <div className="introduction_right">
        Eu sou o lado direito
      </div>
    </div>
  )
}

export default Introduction