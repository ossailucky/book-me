import { faCircleArrowLeft, faCircleArrowRight, faLocationDot,faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import "./hotel.scss"
import { useState } from 'react'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)


  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/359595551.jpg?k=b8cea1191f9bb0bb5f8b73f2925338b7fc88abae7ef0347d71cd01eec76195a9&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/359595682.jpg?k=e24a15a08cbe212e0d2843f56fd75a95ced1061e2e395759ecdcbcbb94936991&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/359599037.jpg?k=cfbc04f91b1b7a831bdf10037e7e4d2b92e16addfe950929c6f6fe82bff2670c&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/359604441.jpg?k=50eb6ad880743ed1a144c0cac43a9903e0bc55b359d27f494df70ef186885d79&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/359595551.jpg?k=b8cea1191f9bb0bb5f8b73f2925338b7fc88abae7ef0347d71cd01eec76195a9&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/359604546.jpg?k=377e736a460ffdac9f5bd51da23f41215d3e85113cc815ae31769acfdb0aff85&o=&hp=1"
    },
  ]

  const handleOpen = (i)=>{
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) =>{
    let newSliderNumber;

    if(direction === "l"){
    newSliderNumber = slideNumber === 0 ? 5: slideNumber-1
  }
  else{
    newSliderNumber = slideNumber === 5 ? 0: slideNumber+1

  }

  setSlideNumber(newSliderNumber)
}

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark}  className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")} />

          </div>
          }
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
              {photos.map((photo,i)=>
              {
                return(
                <div className="hotelImgWrapper">
                    <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                 </div>)
              })}
          </div>
          <div className="hoteldetails">
            <div className="hotelDetailsTexts">
              <h1>stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis explicabo commodi est numquam quia quaerat, minus ipsa cupiditate expedita error optio atque. Et accusamus nulla maiores, dolorem mollitia modi sed iure eius qui, ut itaque alias quia perspiciatis laboriosam! Laboriosam sit itaque distinctio tempore facilis ea qui? Ipsam esse officiis natus ipsa quidem commodi nulla, perferendis asperiores necessitatibus aliquid beatae quibusdam architecto eligendi sequi dignissimos maxime quasi possimus aliquam accusantium sapiente qui iure? Eligendi eius, id repudiandae mollitia aperiam itaque dolor minus nostrum reprehenderit, autem fugit quisquam quam! Iste iure quas alias nobis sunt explicabo deleniti vero nemo ad recusandae!
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Located in real heart of Krakow, this property has an execellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <br />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel