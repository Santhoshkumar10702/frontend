import React from 'react'
import { ReactComponent as Logo } from '../icons_assets/Logo.svg'
import Nav from './Nav'

function Header() {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  )
}

export default Header