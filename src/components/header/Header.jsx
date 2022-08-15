import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { format } from 'date-fns';
import "./header.scss";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from "react-date-range";


const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  return (
    <div className="header">
        <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
            </div>
        </div>
        <h1 className="headerTitle">A liftime of discounts? It's Genius</h1>
            <p className="headerDesc">Get rewarded for your travels-unlock instant savings of 10% or more with a free Book-me account</p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="hearderSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <input type="text" 
                  placeholder="Where are you going?" 
                  className="headerSearchInput"/>
              </div>
              <div className="hearderSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                  <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(
                    date[0].startDate, 
                    "MM/dd/yyyy"
                    )} to ${format(date[0].endDate, 
                    "MM/dd/yyyy")}`}</span>
                  {openDate && <DateRange
                      editableDateInputs={true}
                      onChange={item => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                    />}
              </div>
              <div className="hearderSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span className="headerSearchText">2 adults 2 children 1 room</span>
              </div> 
              <div className="hearderSearchItem">
                  <button className="headerBtn">Search</button>
              </div> 
              
            </div>
        </div>
        
    </div>
  )
}

export default Header