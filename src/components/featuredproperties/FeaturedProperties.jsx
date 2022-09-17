import React from 'react'
import "./featuredproperties.scss"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
          <img src="https://cf.bstatic.com/xdata/images/hotel/square600/39615603.webp?k=bab0346afe1578f3b68bfb8e80aac77b1715174be14da3442c2aaf9d5669bdeb&o=&s=1" alt="" className="fpImg" />
          <span className="fpName">Aparthotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img src="https://cf.bstatic.com/xdata/images/hotel/square600/39659322.webp?k=8b62535404752f009d7706c9b90fdbac820b1b0d37fa876647bca0375a66edd8&o=&s=1" alt="" className="fpImg" />
          <span className="fpName">Appartamento Benincampi</span>
          <span className="fpCity">Rome</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <button>9.7</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img src="https://cf.bstatic.com/xdata/images/hotel/square600/48243413.webp?k=9b23033fee3e299379e91687caa48c3f3185c3d48258027105eb27440a12ec0f&o=&s=1" alt="" className="fpImg" />
          <span className="fpName">LivinParis - Luxury Bedrooms</span>
          <span className="fpCity">Paris</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img src="https://cf.bstatic.com/xdata/images/hotel/square600/69813393.webp?k=f4baabb93cf1ac3b26aca4b505bcc0c0ddc90abe60bc28450e08c34e2090aec1&o=&s=1" alt="" className="fpImg" />
          <span className="fpName">Casa Portuguesa Prata</span>
          <span className="fpCity">Lisbon</span>
          <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
            <button>7.9</button>
            <span>Good</span>
          </div>
        </div>
    </div>
  )
}

export default FeaturedProperties