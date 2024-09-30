import Eos from "../../assets/icons/Eos"
import LaslesVPN from "../../assets/icons/LaslesVPN"
import Menu from "../../assets/icons/Menu"

import "../../sass/components/header/header.scss"

export const Header = () => {
  return (
    <div className="header">
      <div className="header__logos">
        <Eos />
        <LaslesVPN />
      </div>
      <ul className="header__menu">
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonial</li>
        <li>Help</li>
      </ul>
      <div className="header__containerButton">
        <button className="header__containerButton__signIn">Sign in</button>
        <button className="header__containerButton__signUp">Sign up</button>
        <Menu />
      </div>
    </div>
  )
}
