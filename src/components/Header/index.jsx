import React from 'react'

import './header.css'

import logo from '../../assets/img/logo.svg'

const index = () => {
  return (
    <header className="header">
      <div className="header__wraper">
        <div className="header__logo">LOGO</div>
        <div className="header__nav">
          <span className="header__nav--text">How We Work</span>
          <img src="" alt="" className="header__nav--icon" />
          <span className="header__nav--text">What We Do</span>
        </div>
        <div className="header__options">
          <button className="header__options--btn">Contact us</button>
          <select id="languages">
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
