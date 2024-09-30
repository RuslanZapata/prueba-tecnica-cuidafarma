import BannerFeatures from '../../assets/BannerFeatures.png'
import TickCircle from '../../assets/icons/TickCircle'
import '../../sass/components/features/features.scss'

const Features = () => {
  return (
    <div className='features'>
      <img src={BannerFeatures} alt="" />
      <div className='features__description'>
        <strong>We provide many features you can use</strong>
        <span>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</span>
        <ul>
          <li><TickCircle /> Powerfull online protection.</li>
          <li><TickCircle /> Internet with borders</li>
          <li><TickCircle /> Supercharged VPN</li>
          <li><TickCircle /> No specific time limits</li>
        </ul>
      </div>
    </div>
  )
}

export default Features