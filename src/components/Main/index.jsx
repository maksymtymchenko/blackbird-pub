import React from 'react'

// import styles
import './main.scss'

// import components
import Header from '../Header'
import Title from './Title'

const index = () => {
  return (
    <main className="main">
      <Header />
      <div className="main__wrapper">
        <Title />
      </div>
    </main>
  )
}

export default index
