import React from 'react'
import "./About.css"
import images from "./images/images.jpg"

const About = ({data}) => {
/*
Here
data=1 means true
data=2 means false
*/ 
  return (
      <div data-theme={data===1?"Dark":"Light"}className='About-page'>
        <div className='cont1-about'>
            <div className='prof-back'>
                <div className='img1'>
                  <div className='img2'>
                  <img src={images}/>
                  </div>
                </div>
                <div className='img-name'>
            <span><b>NIVISS.K</b></span><br/>
            <span>Web Developer</span>
                </div>
              </div>
            <div className='Skills'>
            <h1>My Skills</h1>
            <li><h4>Java</h4>
            <span className='bar'><span className='java'></span></span>
            </li>
            <li><h4>HTML</h4>
            <span className='bar'><span className='html'></span></span>
            </li>
            <li><h4>CSS</h4>
            <span className='bar'><span className='css'></span></span>
            </li>
            <li><h4>Javascript</h4>
            <span className='bar'><span className='javascript'></span></span>
            </li>
            <li><h4>React</h4>
            <span className='bar'><span className='react'></span></span>
            </li>
          </div>
        </div>
        <div className='cont2-about'>
          <div className='details'>
          <h4>My Intro</h4>
          <h1>About Me</h1>
          <p>
            <b>Niviss</b> loves programming, sketching, traveling and playing cricket.
            As a recent graduate with a passion for web development and a strong foundation
            in front-end-development. Throughout my academic journey, I have gained valuable experience 
            in HTML, CSS, Javascript and Java,which allowed me to develop responsive and visually appealing websites.
            In addition to my technical skills, I am a quick learner and have a strong desire to continuously improve my abilities.
            I am confident that my passion for front-end development, coupled with my dedication to staying up-to-date with the industry trends.
          </p>
          <table>
            <tr>
              <th>Name   : </th>
              <td>Niviss.K</td>
            </tr>
            <tr>
              <th>Degree   : </th>
              <td>B.E-EEE</td>
            </tr>
            <tr>
              <th>D.O.B   : </th>
              <td>6 Feb 2002</td>
            </tr>
            <tr>
              <th>Address   : </th>
              <td>Vellakovil,Tamil Nadu</td>
            </tr>
            <tr>
              <th>Country   : </th>
              <td>India</td>
            </tr>
            <tr>
              <th>Email   : </th>
              <td>kuppusamy4082@gmail.com</td>
            </tr>
          </table>
          </div>
        </div>
      </div>

  )
}

export default About