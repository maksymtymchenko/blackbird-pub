import React from 'react'

// import styles
import './header.scss'

// import img
import logo from '../../assets/img/logo.svg'
import arrowRight from '../../assets/img/arr-right.svg'

const index = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img className="header__logo" src={logo} alt="BlackBird" />
        <div className="header__nav">
          <span className="header__nav--text">How We Work</span>
          <button className="header__nav--menu">
            <div className="header__nav--bars"></div>
            <div className="header__nav--bars"></div>
            <div className="header__nav--bars"></div>
          </button>
          <span className="header__nav--text">What We Do</span>
        </div>
        <div className="header__options">
          <button className="header__options--btn">
            Contact us
            <img className="arrow__right" src={arrowRight} alt="" />
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
