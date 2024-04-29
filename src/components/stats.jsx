import "../css/proffesion.css";
import "../css/client.css";
import "../css/stats.css";
import {
  FaBriefcase,
  FaCoins,
  FaHandsClapping,
  FaProductHunt,
  FaTrophy,
  FaTruck,
} from "react-icons/fa6";
// import { FaWandMagicSparkles } from "react-icons/fa6";
import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";

function Stats() {
  let [one, setOne] = useState(0);
  let [two, setTwo] = useState(0);
  let [three, setThree] = useState(0);
  let [four, setFour] = useState(0);

  function stopwatch(data) {
    data.forEach((dt) => {
      let { limit, changer } = dt;
      let limit_reached = 0;
      let n = setInterval(() => {
        if (limit === limit_reached ||  limit_reached > limit ) return clearInterval(n);
        changer((prev) => {
          limit_reached++;
          return prev + 1;
        });
      }, 10);
    });
  }

  useEffect(() => {
    // Configure the scroll reveal animation
    ScrollReveal().reveal(".up", {
      delay: 200,
      origin: "bottom",
      duration: 800,
      scale: 1,
    });

    ScrollReveal().reveal(".upto", {
      delay: 200,
      origin: "bottom",
      duration: 800,
      scale: 1,
      beforeReveal: ()=> stopwatch([
        { limit: 100, changer: setOne },
        { limit: 1110, changer: setTwo },
        { limit: 70, changer: setThree },
        { limit: 576, changer: setFour },
      ]),
    });
  }, []);
  return (
    <div className="profession client stat">
      <p className="client_title up">Our Professional Stats.</p>
      <br />
      <div className="some_summary">
        <div className="some_wrapper stats upto">
          <div className="some">
            <div className="stt">
              <div className="count">{four}+</div>
              <div>
                <FaHandsClapping color="brown" /> Happy Clients
              </div>
            </div>
            <div className="stt">
              <div className="count">{one}+</div>
              <div>
                <FaTruck color="gold" /> Suppliers
              </div>
            </div>
            <div className="stt">
              <div className="count">{two}+</div>
              <div>
                <FaProductHunt color="green" /> Products handled
              </div>
            </div>
            <div className="stt">
              <div className="count">${three}M+</div>
              <div>
                <FaCoins color="grey" /> Revenue Generated{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
