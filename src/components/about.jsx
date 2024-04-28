import '../css/aboutus.css'
import  jane from '../assets/29.svg'

import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function AboutUs({reverse , title , content , image  }){

    useEffect(() => {
        // Configure the scroll reveal animation
        ScrollReveal().reveal('.up', {
          delay: 200,
          origin: 'bottom',
          duration: 800,
          scale: 1,
        });
      }, []);
    
    return (
        <div  className="about" style={reverse?{flexDirection:'row-reverse'}:{}}>
           <div className="ceo">
            <img className={reverse?"shadow up":'up'}  src={image || jane} alt="" />
           { reverse && <div className="more">
            <div className="name name_">
                <h1 className="up">Ethan Charles More</h1>
               <p className="up">CEO of Supplify International</p>
            </div>
               <div className="sticky_ball1"></div>
               <div className="sticky_ball2"></div>
            </div>}
           </div>
           <div style={reverse?{width:"100%"}:{}} className="section_About">
            <h1 className="up">{title || 'About Supplify International .'}</h1>
            <p className='content_about'>{content || `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Expedita alias quas perspiciatis aliquam hic harum ducimus accusantium,
                 temporibus vel omnis quisquam distinctio quidem pariatur ea, ab aperiam, blanditiis fugit! Repudiandae?
                 temporibus vel omnis quisquam distinctio quidem pariatur ea, ab aperiam, blanditiis fugit! Repudiandae?`}</p>
           </div>
         
        </div>
    )
}

export default AboutUs