import { useEffect } from 'react'
import { register } from 'swiper/element/bundle'
import Banner1 from '../assets/img/Banner1.png'
import Banner2 from '../assets/img/Banner2.png'
import Banner3 from '../assets/img/Banner3.png'

function SliderImg () {
  useEffect(() => {
    register()
  }, [])
  return (
    <>
      <swiper-container
        slides-per-view='1'
        loop='true'
        autoplay-delay='4000'
        autoplay-disable-on-interaction='false'
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
