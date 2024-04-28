import "../css/proffesion.css";
import {
  FaArrowUpRightFromSquare,
  FaCalendar,
  FaCertificate,
} from "react-icons/fa6";

import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function ProfessionalBackground() {
  useEffect(() => {
    // Configure the scroll reveal animation
    ScrollReveal().reveal(".up", {
      delay: 200,
      origin: "bottom",
      duration: 800,
      scale: 1,
    });
  }, []);
  return (
    <div className="profession">
      <div className="summary up">
        <p>Professional Background</p>
        <p className="summary_content">
          {" "}
          With over 18 years in finance, Jane Ellen Carter efficiently manages
          wealth. Holding licenses in 36 states, her expertise is solid. For
          more details, visit BrokerCheck.
        </p>

        <a href="https://brokercheck.finra.org/individual/summary/1241156">
          <div className="btn">
            Visit Broker Check <FaArrowUpRightFromSquare />
          </div>
        </a>
      </div>

      <div className="some_summary">
        <div className="some_wrapper up">
          <div className="some">
            <div className="icon color-d28">
              <FaCalendar />
            </div>
            <div className="content">
              <p className="content_title">Years of Exp.</p>
              <p className="content_content">
                {" "}
                Jane Ellen Carter boasts over 18 years of experience in the
                financial sector, enabling her to adeptly oversee wealth
                management processes.
              </p>
            </div>
          </div>
        </div>
        <div className="some_wrapper up">
          <div className="some">
            <div className="icon">
              <FaCertificate />
            </div>
            <div className="content">
              <p className="content_title">State licences</p>
              <p className="content_content">
                {" "}
                She also holds licenses in 36 states, further demonstrating her
                extensive expertise and credibility in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalBackground;
