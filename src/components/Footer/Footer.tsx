import Eos from "../../assets/icons/Eos"
import Facebook from "../../assets/icons/Facebook"
import LaslesVPN from "../../assets/icons/LaslesVPN"
import WhatsApp from "../../assets/icons/WhatsApp"
import YouTube from "../../assets/icons/YouTube"
import "../../sass/components/footer/footer.scss"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__menu">
        <ul>
          <li className="footer__menu__title">Product</li>
          <li className="footer__menu__item">Download</li>
          <li className="footer__menu__item">Pricing</li>
          <li className="footer__menu__item">Locations</li>
          <li className="footer__menu__item">Server</li>
          <li className="footer__menu__item">Countries</li>
          <li className="footer__menu__item">Blog</li>
        </ul>
        <ul>
          <li className="footer__menu__title">Engage</li>
          <li className="footer__menu__item">LaslesVPN?</li>
          <li className="footer__menu__item">FAQ</li>
          <li className="footer__menu__item">Tutorials</li>
          <li className="footer__menu__item">About us</li>
          <li className="footer__menu__item">Privacy policy</li>
          <li className="footer__menu__item">Terms of service</li>
        </ul>
        <ul>
          <li className="footer__menu__title">Earn money</li>
          <li className="footer__menu__item">Become partner</li>
          <li className="footer__menu__item">Affilite</li>
        </ul>
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
