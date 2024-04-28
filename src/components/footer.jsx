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
        Supplify International. - Your Trusted Partner for Global Sourcing. Explore our wide range of high-quality wholesale products and experience exceptional service. Contact us today to streamline your sourcing process and take your business to new heights.
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
          <a href="mailto:info@supplifyinternational.com"><li style={{wordWrap:'break-word'}}><FaEnvelope /> in@supplifyinternational.com</li></a>
          <a href="tel:+14242682507"><li><FaPhone /> +1 424-268-2507</li></a>
          <li><FaAddressCard /> ONE BRYANT PARK NEW YORK, NY 10036</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
