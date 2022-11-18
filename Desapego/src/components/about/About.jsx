import React from "react"
import Categories from "./Categories"
import "./About.css"
//import SliderHome from "./Slider"

const About = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
         <Categories/>
         <h1>Sobre</h1>
        </div>
      </section>
    </>
  )
}

export default About
