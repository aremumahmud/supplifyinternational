import { FaChartPie, FaGraduationCap } from "react-icons/fa6";
import "../css/services.css";
import "../css/education.css";

import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function Education() {

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
    <div className="services">
      <div className="skills">
        <p className="skill_header up">My Work Experience / Examinations.</p>

        <div className="education">
          <div className="card_wrap">
            
            {" "}
            <div className="card up">
              <div className="icon exams_dates">
                <div className="sp1">
                  <FaChartPie color="#BA5A31" />
                  Stock Broker | Investment Adviser
                </div>

                <span style={{ float: "right" }}>
                  2006 - Present (18 Years)
                </span>
              </div>
              <div className="skill_level l15 op8">
               MERRILL LYNCH, PIERCE, FENNER & SMITH INCORPORATED (CRD#:7691) 9921
                DUPONT CIRCLE DR W FORT WAYNE, IN 46825. Registered with this firm
                since 5/17/2006 .
              </div>
            </div>
            <div className="card up">
              <div className="icon exams_dates">
                <div className="sp1">
                  <FaGraduationCap color="#1E2D24" />
                  General Industry/Products Exam
                </div>

                <span>Oct 1, 2018</span>
              </div>
              <div className="skill_level l15">
                SIE – Securities Industry Essentials Examination.
              </div>
            </div>
            <div className="card up">
              <div className="icon exams_dates">
                <div className="sp1">
                <FaGraduationCap color="#1E2D24" />
                  General Industry/Products Exam
                </div>

                <span>Feb 24, 2006</span>
              </div>
              <div className="skill_level l15">
                Series 7 - General Securities Representative Examination.
              </div>
            </div>
            <div className="card up">
              <div className="icon exams_dates">
                <div className="sp1">
                <FaGraduationCap color="##1E2D24" />
                  State Securities Law Exam
                </div>

                <span>May 16, 2006</span>
              </div>
              <div className="skill_level l15">
                Series 66 - Uniform Combined State Law Examination.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
