import Eos from "../../assets/icons/Eos"
import Facebook from "../../assets/icons/Facebook"
import LaslesVPN from "../../assets/icons/LaslesVPN"
import WhatsApp from "../../assets/icons/WhatsApp"
import YouTube from "../../assets/icons/YouTube"
import { menuFooter } from "../../core/constants"
import "../../sass/components/footer/footer.scss"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__menu">
        {menuFooter.map(({title, items}, index) => (
          <ul key={index}>
            <li className="footer__menu__title">{title}</li>
            {items.map((item, index) => (
              <li key={index} className="footer__menu__item">{item}</li>
            ))}
          </ul>
        ))}
      </div>
      <div className="footer__description">
        <div className="footer__description__logos">
          <Eos />
          <LaslesVPN />
        </div>
        <p className="footer__description__text">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.
        </p>
        <div className="footer__networks">
          <Facebook />
          <WhatsApp />
          <YouTube />
        </div>
      </div>
    </div>
  )
}
