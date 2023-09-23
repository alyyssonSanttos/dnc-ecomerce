import React from 'react'
import dncLogo from "../../assets/logo_dnc.png"
import "./index.scss"

const Header = () => {
  return (
    <div className='header'>
        <img classsName="header__img" src={dncLogo} alt="dnc logo" />
        
    </div>
  )
}

export default Header