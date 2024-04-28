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
                {" "}
                I&apos;m incredibly grateful for Jane Carter&apos;s expertise in tax planning. Her strategic guidance and 
                personalized approach have been invaluable in optimizing my tax strategy. With her help, i&apos;ve been able to navigate complex tax laws and maximize my savings
                while ensuring compliance. Jane Carter is not just a financial advisor but a trusted partner who is commited to my
                financialwell-being. I highly recomment their services to anyone looking to achieve greater financial efficiency and peace of mind.
              </p>
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
                I started investing in unit trusts seven years ago via Jane
                ellen carter. Straight away I was impressed with the
                transparency and the honesty that I felt when dealing with her
                team. My queries and questions are always promptly replied to,
                and the advice from her has paid dividends. It&apos;s good to
                feel that your advisers have your interests at heart and that
                you are not treated as a client number. Thank you Jane ellen
                carter for a job well done and putting your Clients first.
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
                {" "}

                
I am a regular trader who recently looked to optimise my leverage and
lower brokerage fees by trading more often. I wanted to quit my full-time job to pursue trading full time but wasn&apos;t making enough from it at first. I tried multiple brokerage companies to get tips and information, but none were helping me. Until I discovered Jane Ellen Carter, which offered some of the best expert trading strategies out there. She gave me plenty of advice and information to help me improve the success of my investments. I have since quit my day job and trade full-
time
              </p>
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
  );
}

export default MyClientSays;
