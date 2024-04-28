import '../css/hero1.css'
import jane from '../assets/jane.jpg'



function Hero1(){

    

    return (
        <div className="hero1">
            <div className="hero_inner">
                <div className="text">
                    <div className="image">
                        <img src={jane} alt="" />
                    </div>
                    <h1>Welcome to Codnot</h1>
                    <p>Your Gateway to Global Wholesale Supply</p>
                    <div className="cta">Check us out!</div>
                </div>
            </div>
        </div>
    )
}

export default Hero1