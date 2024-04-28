import '../css/header.css'
import logo from '../assets/log5.png'
import {FaBars,FaPaperPlane} from 'react-icons/fa6'
import { useState } from 'react'

function Header (){

        const [on , setOn] = useState(false)
        return (
        <div className="header_wrapper">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="hamburger" onClick={()=>{setOn(prev => !prev)}}>
                    <FaBars  />
                </div>
                <div className="menus">
                <ul className='ul'>
                    <a href="/"><li>Home</li></a>
                    <a href="#about"><li> About Us</li></a>
                    <a href="#services"><li>Products</li></a>
                    <a href="#reviews"><li> Reviews</li></a>
                </ul>
            </div>
            <div className="menus1" style={{display: on?'block':"none"}}>
                <ul className='ul1'>
                    <a href="/"><li> Home</li></a>
                    <a href="#about"><li>About</li></a>
                    <a href="#services"><li> Services</li></a>
                    <a href="#reviews"><li> Reviews</li></a>
                </ul>
            </div>
            <a href="#contact"> <div className="cta">
               

                     Contact us
                <FaPaperPlane />
               
               
            </div> </a>
            </div>

            
        </div>
    )
}


export default Header