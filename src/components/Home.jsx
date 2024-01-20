import React,{useEffect} from 'react'
//style
import "../style/Home.css"
import 'aos/dist/aos.css'
//import libraries 
import { Link } from 'react-router-dom'
import {AiFillInstagram} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import Aos from 'aos'
//img
import Logo from "../assets/Logo.jpg"
import twitter from "../assets/twitter.png"
import Homepage1 from "../assets/Homepage1_photo.png"
const Home = () => {
    useEffect(() => {
        document.title="Coding Buddies | Home"
        Aos.init();
      }, [])
  return (
   <>
   <div className="main">
    <div className="page1">
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Coding Buddies" />
            </div>
            <div className="navLinks">
                <div className="links">
                <Link to="/">Home</Link>
                <Link to="/service">Service</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact us</Link>
                </div>
            </div>
            <div className="navSocial">
                <AiFillInstagram className='navIcons'/>
                <AiFillLinkedin className='navIcons'/>
                <img src={twitter} alt="X"/>
            </div>
        </div>
        <div className="introSec">
            <div className="content" data-aos="fade-up" data-aos-duration="1500">
                <div className="Cont1">
                    <h1>Students</h1><h1>Coding Club</h1>
                </div>
                <div className="introPara">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed earum consectetur esse odit iure hic maxime molestias cum consequuntur minus, dignissimos
                </div>
                <div className='ClickHere'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLScgDoUKC9OUbWNIW2LzjmnMo_erMeBQgJ-wnbVrBgv_t_fN1w/viewform?usp=sf_link'>Click Here</a>
                </div>
            </div>
            <div className="image1" data-aos="fade-up" data-aos-duration="2000">
                <img src={Homepage1} alt="" />
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Home
