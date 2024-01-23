import React, { useEffect } from "react";
//style
import "../style/Home.css";
import "aos/dist/aos.css";
//import libraries
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Aos from "aos";
//img
import Logo from "../assets/Logo.jpg";
import twitter from "../assets/twitter.png";
import Homepage1 from "../assets/Homepage1_photo.png";
import page2Img from "../assets/page2Img.png";
const Home = () => {
  useEffect(() => {
    document.title = "Coding Buddies | Home";
    Aos.init();
  }, []);
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
              <AiFillInstagram className="navIcons" />
              <AiFillLinkedin className="navIcons" />
              <img src={twitter} alt="X" />
            </div>
          </div>
          <div className="introSec">
            <div
              className="content"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="Cont1">
                <h1>Students</h1>
                <h1>Coding Club</h1>
              </div>
              <div className="introPara">
                Unlock the world of possibilities through code. Join our coding
                club and embark on a journey to elevate your skills and connect
                with like-minded tech enthusiasts.
              </div>
              <div className="ClickHere">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScgDoUKC9OUbWNIW2LzjmnMo_erMeBQgJ-wnbVrBgv_t_fN1w/viewform?usp=sf_link">
                  Click Here
                </a>
              </div>
            </div>
            <div className="image1" data-aos="fade-up" data-aos-duration="2000">
              <img src={Homepage1} alt="" />
            </div>
          </div>
          <div className="Intro-box-main-div" data-aos="zoom-in-up" data-aos-duration="1500" >
            <div className="box-intro">
              Connect, collaborate, and code together. Join our vibrant
              community where ideas flourish, questions find answers, and
              friendships are forged through a shared passion for technology.
            </div>
            <div className="box-intro">
              Stay on the cutting edge of technology. Explore upcoming
              hackathons, dive into coding challenges, and be part of events
              that redefine what's possible in the tech space.
            </div>
            <div className="box-intro">
              Bring your ideas to life with collaborative projects. Showcase
              your skills, find partners, and contribute to the diverse tapestry
              of innovation within our coding club.
            </div>
          </div>
         </div>
         <div className="page2">
          <div className="whatweDo" data-aos="zoom-in-up" data-aos-duration="2000" >
            <h2>What we do ?</h2>
            <p>
            At Coding Buddies, we're more than just a community of tech enthusiasts- we're a dynamic hub where innovation meets collaboration.Connect with like-minded individuals from around the globe
            </p>
          </div>
          <div className="page2-boxs">
            <div className="what-we-do-box1" data-aos="fade-up" data-aos-anchor-placement="center-bottom"  data-aos-duration="2000">
                <img src={page2Img} alt="page2Img" />
                <h3>Engage and Connect</h3>
                <p>
                Join a vibrant community of tech enthusiasts to discuss coding challenges, share insights, and build lasting connections.Participate in forums and engage in discussions to enhance your understanding of different coding concepts
                </p>
            </div>
            <div className="what-we-do-box1" data-aos="fade-up"data-aos-anchor-placement="center-bottom"  data-aos-duration="2000">
                <img src={page2Img} alt="page2Img" />
                <h3>Hackathon Central</h3>
                <p>
                Stay informed about upcoming hackathons and coding competitions locally and globally.Showcase your coding skills by participating in exciting events and challenges hosted on the platform.
                </p>
            </div>
            <div className="what-we-do-box1" data-aos="fade-up"data-aos-anchor-placement="center-bottom"  data-aos-duration="2000">
                <img src={page2Img} alt="page2Img" />
                <h3>Project Collaboration</h3>
                <p>Explore collaboration opportunities with other members on innovative coding projects.Share and showcase your projects within the community, fostering creativity and collaboration.
                </p>
            </div>
          </div>
         </div>
      </div>
    </>
  );
};

export default Home;
