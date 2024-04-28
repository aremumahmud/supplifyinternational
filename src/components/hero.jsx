import '../css/hero.css'
import jane from '../assets/truck.svg'
// import jane1 from "../imgs/about.jpeg";
import 'animate.css'
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

// import right from '../assets/right1.jpg'
import {FaPaperPlane} from 'react-icons/fa6'
// import { useEffect, useState } from 'react';


function Hero(){

    useEffect(() => {
        // Configure the scroll reveal animation
        ScrollReveal().reveal('.up', {
          delay: 200,
          origin: 'bottom',
          duration: 800,
          scale: 1,
        });
      }, []);
    
    return(
        <div className="hero">
            <div className="hero_left">
                <div className="intro_wrapper">
                {/* <div className="jane_logo">
                     <img src={jane} />
                </div> */}
                <div className="text">
                    <div className="name animate__animated animate__fadeInLeft">
                        <p>Welcome to Supplify</p>
                        <p></p>
                        <p>International</p>
                    </div>
                    <br />
                    <p className='animate__animated animate__fadeIn' style={{lineHeight:"1.5rem"}}> 
                        {
                            `Your Gateway to Global Wholesale Supply.`
                        }
                    </p>

                    <br />
                    <div className="cta"><a href="#contact">Contact us   <FaPaperPlane /></a></div>
                </div>
                
                </div>
                
                
            </div>
            <div className="hero_right">
                
             <div className="image3 up">
                <img  className='animate__animated animate__fadeIn' src={jane} alt="" />
               <p id="about"></p>
             </div>
            </div>
            
        </div>
    )
}


export default Hero