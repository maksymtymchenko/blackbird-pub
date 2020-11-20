import React from 'react'

// import styles
import './header.css'

// import img
import logo from '../../assets/img/logo.svg'
import menu from '../../assets/img/menu-icon.svg'

const index = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img className="header__logo" src={logo} alt="" />
        <div className="header__nav">
          <span className="header__nav--text">How We Work</span>
          <img src={menu} alt="" className="header__nav--icon" />
          <span className="header__nav--text">What We Do</span>
        </div>
        <div className="header__options">
          <button className="header__options--btn">
            Contact us<span>&#x27A1;</span>
          </button>
          <select className="header__options--list" id="languages">
            <option value="en">EN</option>
            <option value="ukr">UKR</option>
            <option value="rus">RUS</option>
          </select>
        </div>
      </div>
    </header>
  )
}

export default index
