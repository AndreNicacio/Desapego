import React from "react"
import Categories from "./Categories"
import "./Products.css"
//import SliderHome from "./Slider"

const Products = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
         <Categories/>
         <h1>Produtos</h1>
        </div>
      </section>
    </>
  )
}

export default Products
