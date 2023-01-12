import React from 'react'
import './home.css'
import CV from '../../assets/RAFISYAH CV.pdf'
import Rafi1 from '../../assets/rafi bening 1.png'
import AboutMe from './AboutMe'

const Index = () => {
  return (
    <div>
    <div className='wrapper'>
      <div class="intro-container container">
      <div class="intro-text text ">
          <h2 className='openl'><span>Hello!, </span> My Name Is</h2>
          <h1 class="name openl">Muhammad <span>Rafisyah</span> Rizkiyawan</h1>
          <h2 className='openl'><span>From </span>XI RPL A</h2>
      </div>
      <div class="intro-button openl">
          <a href={CV} download><button class="button1">Get My CV</button></a>
          <a href='#me'><button class="button1">About Me</button></a>
      </div>
      <div className='intro-img '>
      <img src={Rafi1} className='rafi1 openr'/>
      </div>  
    </div>
  </div>
  <div id='me'><AboutMe/></div>
    
  </div>
  )
}

export default Index