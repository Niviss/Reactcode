import React from 'react'
import "./App.css"
import { useState} from 'react'
import {useTypewriter,Cursor} from "react-simple-typewriter"
import  profile from"./images/profilepics.png"
import moon from "./images/moon.png"
import sun from "./images/sun.png"
import github from "./images/github.png"
import instagram from "./images/instagram.png"
import linkedin from "./images/linkedin.png"
import resume from "./files/Niviss-K.pdf"
import About from "./About"
import Project from "./Project"
import Contact from "./Contact"

const App = () => {
  const [isDark,setisDark]=useState(false)
  const data=isDark?"1":"0"
  const handleClick=()=>{
    setisDark(!isDark)
  }
const [text]=useTypewriter({
  words:["React Developer","Java Developer","Web Developer"],
  loop:{},
  typeSpeed:120,
  deleteSpeed:80
})

  return ( 
    <div data-theme={isDark?"Dark":"Light"} id="Home-Page" className='Project'>
      <div className='Home-page'>
        <header className='headers'>
          <button  className={isDark? "Dark":"Light"} onClick={()=>handleClick()}><img src={isDark? sun:moon} alt="toggle-switch"/></button>
            <div><h1 className='portfolio'>Portfolio</h1></div>
            <ul className='nav-links'>
                <li><a href="#Home-Page">Home</a></li>
                <li><a href="#About-Page">About</a></li>
                <li><a href="#Project-Page">Project</a></li>
                <li><a href="#Contact-Page">Contact</a></li>
            </ul>
        </header>
        <div className='container'>
          <div className='sub-cont'>
            <h3>Hello there! &#x1F44B;</h3>
            <h1>I,m <span>Niviss</span></h1>
            <h2><span style={{color:"green"}}>{text}</span><Cursor/></h2>
            <p>I'm Niviss,a web Developer with the goal of advancing my career and participating in inspring projects.
              Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!</p>
                <div className='Cv'>
                <a href={resume} download>Download CV</a>
                <a href={"mailto:kuppusamy4082@gmail.com"} target='_blank'rel="noreferrer">Hire me</a>
                </div>
          </div>
          <div className='image'><img src={profile} alt='Profile-pics'/></div>
        </div>
        <ol className='prof-icons'>
        <li><a href="https://www.instagram.com/invites/contact/?i=1iuqr392gvnh9&utm_content=butp6ln" rel="noreferrer" target="_blank" alt="Instagram"><img src={instagram} alt='Instagram'/></a></li>
        <li><a href="https://github.com/Niviss" alt="github" target='_blank'rel="noreferrer"><img src={github} alt="Github"/></a></li>
        <li><a href="https://www.linkedin.com/in/niviss-k-51659b219" rel="noreferrer"target='_blank' alt="linkedin"><img src={linkedin} alt='LinkedIn'/></a></li>
        </ol>
        <br/>
        <hr id="About-Page"></hr>
      </div>
      <div >
      <About data={data}/>
      </div>
      <hr></hr>
      <div id="Project-Page">
       <Project data={data}/> 
      </div>
      <hr></hr>
      <div id="Contact-Page"></div>
      <Contact data={data}/>
      <hr></hr>
    </div>
  )
}

export default App