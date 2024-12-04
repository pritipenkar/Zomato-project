import React from 'react'
import "./Header.scss"
import logo from "../../assets/images/Zomato-Logo.png"

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <span>Get the app</span>
                <div className='right'>
                    <span>Investor Relation</span>
                    <span>Add Restaurant</span>
                    <span>Log in</span>
                    <span>Sign in</span>
                </div>
            </nav>
            <div className='headerContent'>
                <img src={logo} alt='logo img' />
                <h3>Discover the best food & drinks in Mumbai</h3>
                <div className='input'>
                    <select name='' id=''>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Banglore">Banglore</option>
                    </select>
                    <input type='text' placeholder='Search for restaurant, cuisine or a dish'/>
                </div>
            </div>
        </div>
    )
}

export default Header