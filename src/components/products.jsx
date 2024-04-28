import "../css/product.css";
import drugs from "../assets/drugs.jpg";
import clothing from '../assets/clothes.jpg'
import electronics from '../assets/electronics.jpg'

import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function Products() {
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
      <h1 className="up">Products We Supply</h1>
      <p className="up">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae natus
        aliquam neque eos veniam id ipsum dolor modi sapiente porro inventore
        repellendus nostrum, ab magni fuga incidunt commodi. Provident, atque.
      </p>

      <div className="product_images">
        <div className="image_p up">
          <img src={drugs} alt="" />
          <div className="more_p">
            <div className="name name_">
              <p>Medical Drugs</p>
              <small>Lorem ipsum dolor sit consectetur adipisicing.</small>
            </div>
          </div>
        </div>
        <div className="image_p up">
          <img src={electronics} alt="" />
          <div className="more_p">
            <div className="name name_">
              <p>Electronics</p>
              <small>Lorem ipsum dolor sit consectetur adipisicing.</small>
            </div>
          </div>
        </div>
        <div className="image_p up">
          <img src={clothing} alt="" />
          <div className="more_p">
            <div className="name name_">
              <p>Clothing</p>
              <small>Lorem ipsum dolor sit consectetur adipisicing.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
