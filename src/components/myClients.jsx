import "../css/proffesion.css";
import "../css/client.css";
import client2 from '../assets/client3.jpeg'
import client1 from '../assets/client1.jpeg'
import client3 from '../assets/client2.jpeg'
// import { FaWandMagicSparkles } from "react-icons/fa6";
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

// import Marquee from "react-fast-marquee";


function MyClientSays() {

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
    <div className="profession client">
      <p className="client_title up">What Our Clients Say.</p>
      <br />
      <br />
      <br />
       <div className="some_summary">
       
         <div className="some_wrapper up">
          <div className="some">
          <div className="icon client_image" >
              {/* <FaWandMagicSparkles /> */}
              <img src={client1} alt="" />
            </div>
            <div className="content">
              <p className="content_title">Elizabeth Versfeld</p>
              <p className="content_content">
                {`
                I've been sourcing products from Supplify International for years now, and I couldn't be happier with their service. Not only do they offer a wide range of high-quality products from around the world, but their customer service is exceptional. Whenever I have a question or need assistance, their team is always quick to respond and incredibly helpful. If you're 
                looking for a reliable wholesale supplier, look no further!
                `}</p>
            </div>
          </div>
        </div>
        <div className="some_wrapper up"  >
          <div className="some">
          <div className="icon client_image" >
              {/* <FaWandMagicSparkles /> */}
              <img src={client2} alt="" />
            </div>
            <div className="content">
              <p className="content_title">Duncan Anderson</p>
              <p className="content_content">
                 {`As a business owner, finding the right products at the right price is crucial for my success. Supplify International has been instrumental in helping me achieve just that. Their extensive range of products spans across various categories, allowing me to find everything I need in one place. What's more, their prices are incredibly competitive, giving me the edge I need in a competitive market. Thank you for consistently delivering exceptional value!`}
              </p>
            </div>
          </div>
        </div>
        <div className="some_wrapper up" >
          <div className="some">
            <div className="icon client_image" >
              {/* <FaWandMagicSparkles /> */}
              <img src={client3} alt="" />
            </div>
            <div className="content">
              <p className="content_title">Sunu Varughese</p>
              <p className="content_content">
                {`Supplify International. has been my go-to partner for sourcing products from around the world. Their commitment to quality, reliability, and professionalism is unmatched. Whether it's electronics, clothing, or home goods, I can always count on them to deliver top-notch products on time and within budget. Working with them has streamlined my sourcing process and allowed me to focus on growing my business. Highly recommended!`}
              </p>
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
  );
}

export default MyClientSays;
