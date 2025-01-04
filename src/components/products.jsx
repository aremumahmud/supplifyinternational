import "../css/product.css";
import drugs from "../assets/drugs.jpg";
import clothing from '../assets/clothes.jpg'
import electronics from '../assets/electronics.jpg'
import cars from '../assets/pexels-j-kainth-2114598126-30028085.jpg'
import parcel from '../assets/pexels-kindelmedia-6868618.jpg'
import bike from '../assets/pexels-cottonbro-5195654.jpg'
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
       {`At SupplySphere International, we pride ourselves on offering a comprehensive range of high-quality wholesale products sourced from around the globe. From electronics to clothing, home goods to accessories, we supply a diverse selection of products to meet the needs of businesses across various industries. With a focus on quality, reliability, and affordability, our carefully curated inventory ensures that our clients have access to the best products on the market. Partner with us and discover a world of possibilities for your business.`}
      </p>

      <div className="product_images">
        <div className="image_p up">
          <img src={drugs} alt="" />
          <div className="more_p">
            <div className="name name_">
              <p>Medical Drugs</p>
              <small>We offer a diverse range of quality medicines.</small>
            </div>
          </div>
        </div>
        <div className="image_p up">
          <img src={electronics} alt="" />
          <div className="more_p">
            <div className="name name_">
              <p>Electronics</p>
              <small>We offer durable and quality electronics.</small>
            </div>
          </div>
        </div>
        <div className="image_p up">
          <img src={clothing} alt="" />
          <div className="more_p">
            <div className="name name_">
              <p>Clothing</p>
              <small>We offer a diverse range of quality clothing.</small>
            </div>
          </div>
        </div>
          <div className="image_p up">
          <img src={cars} alt="" />
          <div className="more_p">
            <div className="name name_">
              <p>Cars</p>
              <small>We offer a diverse range of quality cars.</small>
            </div>
          </div>
        </div>
          <div className="image_p up">
          <img src={parcel} alt="" />
          <div className="more_p">
            <div className="name name_">
              <p>Private Parcels</p>
              <small>We offer a safe and secure shiping of your private parcels.</small>
            </div>
          </div>
        </div>
          <div className="image_p up">
          <img src={bike} alt="" />
          <div className="more_p">
            <div className="name name_">
              <p>Clothing</p>
              <small>We offer a diverse range of quality automobiles.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
