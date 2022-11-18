import React from "react"
import ImgProfile from "../../components/assets/images/user.png"
import ShopCart from "../../components/shops/ShopCart"

const SliderHome = ({ addToCart, shopItems }) => {

  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Painel",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Pedidos",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Endereço",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Detalhes da conta",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Carteira",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Sair",
    },
  ]


  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>          
          <section className='headProfile'>
            <div className='containeProfile'>
              <dix className='lineVendor' >
                <h1 className="titleVendor">Página do Vendedor</h1>
                <button className='button' onClick={() => { }}>
                  Adicionar Produto
                </button>
              </dix>
              <section className="profile">
                <div className="imgProfile">
                  <div className="positionImg">
                    <img src={ImgProfile} alt="Profile" className="imgProfilePng" />
                  </div>
                </div>
                
                <div className="profileInformation">
                    <div className="profileInfomartionContainer">
                      <h1 className="nameVendor">Dyone Andrade</h1>
                      <div className="information">
                        <>
                          <div className='functionsOperaction'>
                            {data.map((value, index) => {
                              return (
                                <div className="box" key={index}>
                                  <span className="span">{value.cateName}</span>
                                </div>
                              )
                            })}
                          </div>
                        </>
                    </div>
                  </div>
                </div>

              </section>
              <div className='product-content  grid1'>
              
            </div>
              
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default SliderHome
