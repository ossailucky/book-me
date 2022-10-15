import React from 'react'
import "./list.scss"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import {format} from 'date-fns'
import { DateRange } from 'react-date-range'
import Searchitem from '../../components/searchitem/Searchitem'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import useFetch from '../../hooks/useFetch'

const List = () => {

  const location = useLocation()
  const [destination,setDestination] = useState(location.state.destination)
  const [openDate, setOpenDate] = useState(false)
  const [dates, setDates] = useState(location.state.dates)
  const [options,setOptions] = useState(location.state.options)
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)


  const  { data, loading, error, reFetch } = useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`)

  const handleClick = ()=>{
    reFetch()
  }
  
  return (
    <div>
      <Navbar />
      <Header  type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (<DateRange
               editableDateInputs={true} 
              onChange={item=>setDates(item.selection)}
              minDate={new Date()}
              ranges={dates}
              />)}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min Price <small> per night</small>
                </span>
                <input type="number" onChange={e=>setMin(e.target.value)} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max Price <small>  per night</small>
                </span>
                <input type="number" onChange={e=>setMax(e.target.value)} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Adults 
                </span>
                <input min={1} type="number" className="lsOptionInput" placeholder={options.adult} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Children 
                </span>
                <input min={0} type="number" className="lsOptionInput"  placeholder={options.children}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                    Room
                </span>
                <input min={1} type="number" className="lsOptionInput"  placeholder={options.room}/>
              </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? "loading": <>
            {data.map((item)=>{

            return  (<Searchitem item={item} key={item._id}/>)

            })}
            
            </>}
          </div>
                
        </div>
      </div>
      <MailList />
      <br />
      <Footer />
    </div>
  )
}

export default List