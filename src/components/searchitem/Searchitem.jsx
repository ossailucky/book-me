import React from 'react'
import "./searchitem.scss"
const Searchitem = () => {
  return (
    <div className="searchItem">
        <img 
        src="https://cf.bstatic.com/xdata/images/hotel/square600/359897059.webp?k=2705e7032c83891cb9b889e71d5703621d4f0bb61da3f18fbef1f87d056b04d2&o=&s=1" 
        alt="" 
        className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire studio • 1 bathroom •  21m² 1 full bed
            </span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">
                Youn can cancel later, so lock in this great price today
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$112</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default Searchitem