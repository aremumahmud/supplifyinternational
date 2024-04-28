import jane from "../imgs/about.jpeg";
import "../css/about.css";
import { FaCalculator, FaChartBar, FaCoins, FaHouseLock } from "react-icons/fa6";

import ScrollReveal from 'scrollreveal';
import { useEffect, useState } from 'react';

function AboutSection() {


   let [less , setLess] =  useState (false)


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
    <div className="about_section" id="about">
       
      <div className="about_left">
        <div className="image up">
          <img src={jane} alt="" />
          <div className="ball"></div>
          <div className="ball1"></div>
        </div>
      </div>
      <div className="about_right">
      <div className="icon client_image up mobile" >
              {/* <FaWandMagicSparkles /> */}
              <img src={jane} alt="" />
            </div>
        <p className="about_head up">About Jane Ellen Carter</p>

        <div className="content">
          <p className="up">
            I am a financial consultant and stock broker with over 18 years of
            experience in 5 different prestigious investment firms in the United
            States.
          </p>
          <p  className="up">
            I have passed 7 qualification exams and have successfully obtained
            52 state licenses. I currently partner with MERRILL LYNCH, PIERCE, FENNER & SMITH INCORPORATED
          </p>
          <p  className="up">
            (CRD#: 7691); handling portfolios for Individuals and Companies
            alike. I’ve done countless research on the finance markets and I
            have drawn up several profit accumulation strategies which been
            implemented on my clients portfolios with a 99% success rate. {!less &&<><br /><span onClick={()=>setLess(true)}  className="read_more">read more ...</span></>}
          </p>
          {
            less&&<p className="up">
            For over two decades. i&apos;ve assisted clients in acheiving financial goals, Specializing in investment
            management and wealth advice. i cater to high-net-worth individuals, families and retirees. My expertise covers investment management,
            financial planning and retirement strategies. Clients rely on me for strength and peace-of-mind through quality financial advice. My commitment
            revolves around achievement, building relationships and upholding integrity. <br /> <span onClick={()=>setLess(false)}  className="read_more">less ...</span>
          </p>
          }

          
        </div>
        <br />
        <div className="skills">
          <p className="skill_header">My Skills</p>

          <div className="skillsetscard">
            <div className="card_wrap up">
              {" "}
              <div className="card">
                <div className="icon">
                  <FaChartBar color="#3A3238" />
                  Financial Consulting
                </div>
                <div className="skill_level">Skill level: 99%</div>
              </div>
            </div>
            <div className="card_wrap up">
              <div className="card">
                <div className="icon">
                  <FaCoins color="#6E4555" />
                  Digital Assets Trading
                </div>
                <div className="skill_level">Skill level: 99%</div>
              </div>
            </div>
            <div className="card_wrap up">
              <div className="card">
                <div className="icon">
                  <FaCalculator color="#E8B4BC"/>
                  Tax Planning
                </div>
                <div className="skill_level">Skill level: 99%</div>
              </div>
            </div>

            <div className="card_wrap up">
              {" "}
              <div className="card">
                <div className="icon">
                  <FaHouseLock color="#D282A6" />
                  Real Estate Planning
                </div>
                <div className="skill_level">Skill level: 97%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
