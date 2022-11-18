import React from "react"
import Categories from "./Categories"
import "./PageVendor.css"
import Vendor from "./Vendor"

const PageVendor = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
          <Vendor />
        </div>
      </section>
    </>
  )
}

export default PageVendor
