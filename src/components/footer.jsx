import "../css/footer.css";
import logo from "../assets/log9.png";
import { FaAddressCard, FaEnvelope, FaPhone} from "react-icons/fa6";


import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function Footer() {

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
    <div className="footer" id="contacts">
      <div className="footer_summary">
        <div className="logo">
          <img className="up" src={logo} alt="" />
        </div>
        <div className="text up">
          Let&apos;s navigate the complexities of wealth together, crafting a
          personalized roadmap for your goals. From investments to retirement
          planning, I&apos;m here to secure your prosperity. Let&apos;s start
          building your brighter tomorrow today.
        </div>
      </div>
      <div className="strand ">
        <p className="title up">Company</p>
        <ul className="up">
          <a href="/"><li> Home</li></a>
          <a href="#about"><li> About Us</li></a>
          <a href="#services"><li> Products</li></a>
          <a href="#reviews"><li> Reviews</li></a>
        </ul>
      </div>
      <div className="strand">
        <p className="title up">Contacts</p>
        <ul className="up">
          <a href="mailto:info@janeellencarter.com"><li><FaEnvelope /> info@supplifyinternational.com</li></a>
          <a href="tel:+12818239633"><li><FaPhone /> +1 281-823-9633</li></a>
          <li><FaAddressCard /> ONE BRYANT PARK NEW YORK, NY 10036</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
