import BannerLasles from '../../assets/Banner.png'
import '../../sass/components/bannerLaslesVPN/bannerLaslesVPN.scss'

const BannerLaslesVPN = () => {
  return (
    <div className='bannerLaslesVPN'>
      <img src={BannerLasles} alt="" />
      <div className='bannerLaslesVPN__container'>
        <span className='bannerLaslesVPN__container__subTitle'>Want anything to be easy with <strong>LaslesVPN</strong></span>
        <p className='bannerLaslesVPN__container__text'>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
        <button className='bannerLaslesVPN__container__button'>Get started</button>
      </div>
    </div>
  )
}

export default BannerLaslesVPN