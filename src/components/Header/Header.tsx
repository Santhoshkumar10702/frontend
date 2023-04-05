import Nav from '../Nav'
import './styles.css'

import { ReactComponent as Logo } from '../../icons_assets/Logo.svg'

function Header() {
  return (
    <>
      <header>
        <Logo />
        <Nav />
      </header>
    </>
  )
}

export default Header