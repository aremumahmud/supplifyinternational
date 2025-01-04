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
        <div  className={reverse?"about":"about about_top"} style={reverse?{flexDirection:'row-reverse'}:{}}>
           <div className={reverse?"ceo":'ceo_n ceo'}>
            <img className={reverse?"shadow up":'up '}  src={image || jane} alt="" />
           { reverse && <div className="more">
            <div className="name name_">
                <h1 className="up">Ethan Charles Moore</h1>
               <p className="up">CEO of SupplySphere International</p>
            </div>
               <div className="sticky_ball1"></div>
               <div className="sticky_ball2"></div>
            </div>}
           </div>
           <div style={reverse?{width:"100%"}:{width:"100%"}} className="section_About">
            <h1 className="up">{title || 'About SupplySphere International .'}</h1>

            { reverse && <>  <img  className='up display' src={image} width={'50%'} style={{borderRadius:"10px"}} /> </> }
           
            <p className='content_about'>{content || `At SupplySphere International, we are dedicated to being your premier destination for sourcing top-quality wholesale products from around the world. With a commitment to excellence, we offer a diverse range of products across various categories to meet the needs of businesses worldwide. Backed by a team of industry experts and driven by a passion for customer satisfaction, we strive to provide unparalleled service and value to our clients. Discover the difference with SupplySphere International and unlock new opportunities for your business.`}</p>
           </div>
         
        </div>
    )
}

export default AboutUs