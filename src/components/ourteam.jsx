import "../css/product.css";
// tronics.jpg'
import cars from '../assets/IMG-20250101-WA0147.jpg'
import parcel from '../assets/IMG-20250101-WA0151.jpg'
import bike from '../assets/IMG-20250101-WA0154.jpg'
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function Team() {
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
    <div className="products">
      <br />
      <br />
      <br />
      <h1 className="up">Our Wonderful Team</h1>
      <p className="up">
       {`Our team is a dynamic group of talented individuals united by a shared vision of innovation and excellence. With diverse expertise and a passion for creating impactful solutions, we collaborate seamlessly to bring ideas to life. Each member contributes unique strengths, making us stronger together and driving our mission to success.`}
      </p>

      <div className="product_images">
      
          <div className="image_p up">
          <img src={cars} alt="" />
          <div className="more_p">
            <div className="name name_">
              <p>Alex Carter</p>
              <small> Customer Relations Specialist</small>
            </div>
          </div>
        </div>
          <div className="image_p up">
          <img src={parcel} alt="" />
          <div className="more_p">
            <div className="name name_">
              <p>Sophie Nguyen</p>
              <small> Social Media Manager
</small>
            </div>
          </div>
        </div>
          <div className="image_p up">
          <img src={bike} alt="" />
          <div className="more_p">
            <div className="name name_">
              <p>Liam Johnson</p>
              <small>Logistics Manager</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
