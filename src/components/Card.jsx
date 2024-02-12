import React,{useEffect} from 'react'
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../style/card.css"
import Aos from "aos";
import "aos/dist/aos.css";
const Card = ({img,name,insta,email,linkdin}) => {
    const firstS="<Developer's Team>";
    const SecondS=":} Coding Buddies";
    useEffect(() => {
        Aos.init();
      }, []);
  return (
   <>
   <div className='profilebox' data-aos="fade-up"data-aos-anchor-placement="center-bottom"  data-aos-duration="2500">
    <img src={img} alt="ProfileImg" />
    <div className="profileCont">
        <h2>{name}</h2>
        <h4>{firstS}</h4>
        <h5>{SecondS}</h5>
        <div className="member-social">
            <a href={linkdin}>
                <LinkedInIcon className='SocialIcons' />
            </a>
            <a href={"mailto:"+email}>
                <EmailIcon className='SocialIcons' />
            </a>
            <a href={insta}>
                <InstagramIcon className='SocialIcons'/>
            </a>
        </div>
    </div>
   </div>
   </>
  )
}

export default Card