import React from 'react'
import "./Contact.css";
import Marquee from "react-fast-marquee"
import star from "./images/star.png"
import { useState} from 'react';
import instagram from "./images/instagram.png"
import github from "./images/github.png"
import linkedin from "./images/linkedin.png"
import emailjs from "@emailjs/browser"

const Contact = ({data}) => {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [subj,setsubj]=useState("");
  const [msg,setmsg]=useState('')
  

  const handleSubmit=async(e)=>{
    e.preventDefault();

    const serviceid="service_we3zfvy";
    const templateid="template_krqjv2m";
    const publicKey="fE2z_eG9BsbSSyzqh";
  

     const template_params={
        name:name,
        email:email,
        subj:subj,
        msg:msg,
      };

      emailjs.send(serviceid,templateid,template_params,publicKey)
      .then((response)=>{
        alert("email sent successfully");
        console.log("email sent successfully");
        setname("") 
        setemail("")
        setsubj("")
        setmsg("")
      }).catch((error)=>{
        alert("error in sending email")
        console.log("error sending mail")
    })

   
  }
  return (
    <div data-theme={data===1?"Dark":"Light"} className="Contact-page">
    <div className='container-CP'>
        <div className='laptop'>
          <div className='content'>
            <div className='marquee'>
            <Marquee>
            <div  className='marquee-list'>
            <div className='marquee-cont'>
              <h3>Contact Me</h3>
              <div className='marq-img'>
                <img src={star}/>
              </div>
            </div>

            <div className='marquee-cont'>
              <h3>Contact Me</h3>
              <div className='marq-img'>
                <img src={star}/>
              </div>
            </div>

            <div className='marquee-cont'>
              <h3>Contact Me</h3>
              <div className='marq-img'>
                <img src={star}/>
              </div>
            </div>

            <div className='marquee-cont'>
              <h3>Contact Me</h3>
              <div className='marq-img'>
                <img src={star}/>
              </div>
            </div>

            </div>
            </Marquee>
            </div>
            <div className='contact-info'>
              <h6>I'LL BE GLAD TO ANSWER YOUR QUESTION</h6>
              <h6>--XXX--</h6>
                <form onSubmit={handleSubmit}>
                  <input type='text'
                  placeholder='Name'
                  className='form-data'
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
                  required
                  />
                  <input type="email"
                   placeholder='Email address'
                   className='form-data'
                   value={email}
                   onChange={(e)=>setemail(e.target.value)}
                   required
                   />
                  <input type='text' 
                  placeholder='Subject'
                  className='form-data'
                  value={subj}
                  onChange={(e)=>setsubj(e.target.value)}
                  required
                  />
                  <textarea name="postContent"
                   placeholder='your messge'
                   className='form-datamsg'
                   value={msg}
                   onChange={(e)=>setmsg(e.target.value)}
                   required
                   />
                    <div className='verification'>
                   <button className='buttonsub'>Send Message </button>
                    </div>             
                </form>
            </div>
            
          </div>
        </div>
    <footer>
      <div className='footer'>
        <ol className='prof-icons-CP'>
            <li><a href="https://www.instagram.com/invites/contact/?i=1iuqr392gvnh9&utm_content=butp6ln" rel="noreferrer"target="_blank" alt="Instagram">
              <img src={instagram} alt='Instagram'/></a></li>
            <li><a href="https://github.com/Niviss" alt="github" target='_blank'rel="noreferrer"><img src={github} alt="Github"/></a></li>
            <li><a href="https://www.linkedin.com/in/niviss-k-51659b219" rel="noreferrer"target='_blank' alt="linkedin">
              <img src={linkedin} alt='LinkedIn'/></a></li>
      </ol>
        <ul className='nav-links-CP'>
            <li><a href="#Home-Page">Home</a></li>
            <li><a href="#About-Page">About</a></li>
            <li><a href="c">Project</a></li>
            <li><a href="#Contact-Page">Contact</a></li>
        </ul>
      </div>
      <div className='copyr'>
        <p>Copyright &copy;2024; Designed by <span>NIVISS</span></p>
      </div>
    </footer>
  </div>
    </div>
  )
}


export default Contact