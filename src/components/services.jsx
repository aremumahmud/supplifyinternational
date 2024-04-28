import { FaBriefcase,FaCompass, FaHouseLock, FaPiggyBank } from "react-icons/fa6";
import '../css/services.css'

import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function Services(){
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
        <div className="services" id="services">
            <div className="skills">
          <p className="skill_header up">My Services.</p>

          <div className="skillsetscard">
            <div className="card_wrap up">
              {" "}
              <div className="card">
                <div className="icon">
                  <FaCompass color="#3A3238" />
                 Investment Advisory
                </div>
                <div className="skill_level l15">Unlock Your Financial Potential with Our Investment Advisory Service. Expert Guidance Tailored to You.</div>
              </div>
            </div>
            <div className="card_wrap up">
              <div className="card">
                <div className="icon">
                  <FaPiggyBank color="#6E4555" />
                  Retirement Planning
                </div>
                <div className="skill_level l15">Secure Your Future with Our Retirement Planning Service. Personalized Strategies for a Comfortable Retirement.</div>
              </div>
            </div>
            <div className="card_wrap up">
              <div className="card">
                <div className="icon">
                  <FaBriefcase color="#E8B4BC"/>
                  Portforlio Management
                </div>
                <div className="skill_level l15">Elevate Your Investments with Our Portfolio Management Service. Customized Strategies for Optimal Growth.</div>
              </div>
            </div>

            <div className="card_wrap up">
              {" "}
              <div className="card">
                <div className="icon">
                  <FaHouseLock color="#D282A6" />
                  Real Estate
                </div>
                <div className="skill_level l15">Navigate Real Estate Investments with Confidence. Expert Guidance for Profitable Ventures. </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}


export default Services