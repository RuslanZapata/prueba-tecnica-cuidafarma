import OptionNotSelected from '../../assets/icons/OptionNotSelected'
import ArrowLeft from '../../assets/icons/ArrowLeft'
import OptionSelected from '../../assets/icons/OptionSelected'
import ArrowRight from '../../assets/icons/ArrowRight'
import Star from '../../assets/icons/Star'
import BrooklynSimmons from '../../assets/BrooklynSimmons.png'
import '../../sass/components/happyCustomer/happyCustomer.scss'

const HappyCustomer = () => {
  return (
    <div className='happyCustomer'>
      <div className='happyCustomer__description'>
        <strong>Trusted by thousands of happy customer</strong>
        <span>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</span>
      </div>
      <div className='happyCustomer__slider'>
        <div className='happyCustomer__slider__container'>
          <div className='happyCustomer__slider__container__item'>
            <div className='happyCustomer__slider__container__item__user'>
              <img src={BrooklynSimmons} alt="" />
              <div className='happyCustomer__slider__container__item__user__name'>
                <strong>Brooklyn Simmons</strong>
                <div className='happyCustomer__slider__container__item__user__name__warsaw'>
                  <span>Warsaw,pland</span>
                  <div>
                    4.5 <Star />
                  </div>
                </div>
              </div>
            </div>
            <p className='happyCustomer__slider__container__item__text'>
              “wow...iam very happy to use this vpn, it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best”.
            </p>            
          </div>
          <div className='happyCustomer__slider__container__item'>
            <div className='happyCustomer__slider__container__item__user'>
              <img src={BrooklynSimmons} alt="" />
              <div className='happyCustomer__slider__container__item__user__name'>
                <strong>Brooklyn Simmons</strong>
                <div className='happyCustomer__slider__container__item__user__name__warsaw'>
                  <span>Warsaw,pland</span>
                  <div>
                    4.5 <Star />
                  </div>
                </div>
              </div>
            </div>
            <p className='happyCustomer__slider__container__item__text'>
              “wow...iam very happy to use this vpn, it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best”.
            </p>            
          </div>
          <div className='happyCustomer__slider__container__item'>
            <div className='happyCustomer__slider__container__item__user'>
              <img src={BrooklynSimmons} alt="" />
              <div className='happyCustomer__slider__container__item__user__name'>
                <strong>Brooklyn Simmons</strong>
                <div className='happyCustomer__slider__container__item__user__name__warsaw'>
                  <span>Warsaw,pland</span>
                  <div>
                    4.5 <Star />
                  </div>
                </div>
              </div>
            </div>
            <p className='happyCustomer__slider__container__item__text'>
              “wow...iam very happy to use this vpn, it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best”.
            </p>            
          </div>
        </div>
        <div className='happyCustomer__slider__controller'>
          <div className='happyCustomer__slider__controller__option'>
            <OptionSelected />
            <OptionNotSelected />
            <OptionNotSelected />
            <OptionNotSelected />
          </div>
          <div className='happyCustomer__slider__controller__arrow'>
            <ArrowLeft />
            <ArrowRight />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HappyCustomer