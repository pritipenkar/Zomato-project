import React from 'react'
import "./Card.scss"
import Dine from "../../assets/images/Dine-Out.png"
import Night from "../../assets/images/Night-Life.png"
import Online from "../../assets/images/Online-Food.png"

const Card = () => {
  return (
    <div className='card'>
        <div className='cardImg'>
        <img src={Dine} alt='dine'/>
        <h1>Order Online</h1>
        <span>Stay home and order to your door step</span>
        </div>

        <div className='cardImg'>
        <img src={Night} alt='night'/>
        <h1>Nightlife and clubs</h1>
        <span>Explore the city's top nightlife</span>
        </div>

        <div className='cardImg'>
        <img src={Online} alt='online'/>
        <h1>Dining</h1>
        <span>View city's favourite restaurant</span>
        </div>
    </div>
  )
}

export default Card