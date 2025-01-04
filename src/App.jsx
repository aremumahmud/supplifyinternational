
import './App.css'

import AboutSection from "./components/aboutsection"
import Contact from "./components/contact"
import CopyWright from "./components/copywright"
import Education from "./components/education"
import Footer from "./components/footer"
import Header from "./components/header"
import Hero from "./components/hero"
import MyClientSays from "./components/myClients"
import ProfessionalBackground from "./components/profesional"
import Services from "./components/services"
import Stats from "./components/stats"
import { ReactNotifications } from 'react-notifications-component'
import './css/notification_theme.css' 

import { Store } from 'react-notifications-component';
import { useEffect } from 'react'
import Hero1 from './components/hero1'
import AboutUs from './components/about'
// import { useEffect } from 'react'
import about_image from './assets/ph2.jpg'
import Products from './components/products'
import Team from './components/ourteam'

function successMessage(){
  Store.addNotification({
    title: "",
    message: "Message sent Successfully to Jane Ellen Carter.",
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true
    }
  });
}

function errorMessage(){
  Store.addNotification({
    title: "",
    message: "Message to Jane Ellen Carter failed.",
    type: "warning",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    isMobile: true,
    dismiss: {
      duration: 5000,
      onScreen: true
    }
  });
}


function App() {

  useEffect(()=>{
    if(window.location.hash === '#success_message'){
      successMessage()
    }else if(window.location.hash === '#error_message'){
      errorMessage()
    }
  },[])

  return (
    <>
    <ReactNotifications />
      <Header />
      <br /><br /><br />
      <Hero /> 
      <AboutUs id={"about"}/>
      <AboutUs content={`Ethan Charles Moore, our esteemed CEO at SupplySphere International, brings a wealth of experience and leadership to our team. With a visionary mindset and a dedication to excellence, Ethan leads our company with integrity and innovation. His relentless pursuit of customer satisfaction and strategic vision drives our commitment to providing top-quality wholesale products and exceptional service. Under Ethan's guidance, SupplySphere International continues to thrive as a trusted partner in the global sourcing industry, empowering businesses to succeed in today's competitive market.`} title={'About Our CEO'} shadow={true}  reverse={true} image={about_image}/>
      <br id='services'/>
      <Products />
      <br  id="reviews" /><br /><br /><br /><br />
      <MyClientSays />   <Stats />
      <br /><br />
      <Team />
      <Footer />
      <CopyWright /> 
      {/* 
      <br />
      <br />
      <br />
      <ProfessionalBackground />
      <AboutSection />
      <br />
      <br />
      <Services />
      <Education />
      
     
      <Contact />
    
    */}
      {/* */}
    </>
  )
}

export default App
