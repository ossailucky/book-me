import React from 'react'
import "./featured.scss"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Abuja</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/684500.webp?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Lagos</h1>
                <h2>543 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/808081.webp?k=741722d4e7757b648faf551d5566d2259d3a0f31824f5893aab9f37f43fc7232&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Ibandan</h1>
                <h2>93 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/853006.webp?k=49f75610fb56878eb04a87432a9fa76f3b3e3d68383996d46c7dbbf53c5467c2&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>kano</h1>
                <h2>34 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured