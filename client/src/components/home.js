import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/home.css'
// import mandapam from '../images/mandapam1.jpg'
import concert from '../images/concert.jpg'
import marriage from '../images/marraige.jpg'
import concerts from '../images/concerts.jpg'
import meetings from '../images/meetings.jpg'
import Calendar from './calender';
import { Link } from 'react-router-dom'
import { Footer } from './footer'
export const Home = () => {
    const navigate=useNavigate();
    const explore=()=>{
        navigate('/explore')
    }
  return (
    <div>
    <div className='containe'>
    <img src={concert}></img>
    <div className="text-overlay">
    <button onClick={explore} className="home-but"> Explore Now !!</button>
    </div>
    </div>
    <div className='cal'>
        <Calendar/>
    </div> 
    <div className='gap'>
    <h1>Types of Events</h1>
    <div className='Types_of_Events'>
        <div className='event'>
            <h3>WEDDINGS</h3>
            <img src={marriage}/>
            <p>"A happy marriage is the union of two good forgivers." - Ruth Bell Graham</p>
        </div>
        <div className='event'>
            <h3>MEETINGS</h3>
            <img src={meetings}/>
            <p>"A meeting is an event at which the minutes are kept and the hours are lost." -Unknown</p>
        </div>
        <div className='event'>
            <h3>CONCERTS</h3>
            <img src={concerts}/>
            <p>"Music is the art which is most nigh to tears and memories." - Oscar Wilde</p>
        </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}
