import { register } from 'swiper/element/bundle'
import Banner1 from '../assets/img/Banner1.png'
import Banner2 from '../assets/img/Banner2.png'
import Banner3 from '../assets/img/Banner3.png'

function SliderImg () {
  register()
  return (
    <>
      <swiper-container
        loop='true'
      >
        <swiper-slide>
          <img src={Banner1} className='max-h-300px w-screen' />
        </swiper-slide>

        <swiper-slide>
          <img src={Banner2} className='max-h-300px w-screen' />
        </swiper-slide>

        <swiper-slide>
          <img src={Banner3} className='max-h-300px w-screen' />
        </swiper-slide>
      </swiper-container>
    </>
  )
}

export default SliderImg
