import React from 'react'
import { banners } from '../../data/arrays'
import { Pagination, A11y, Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
const Banner = () => {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      {banners.map((x,ind) => (
        <SwiperSlide key={ind}>
          <img src={x.image} alt='' className='largeScreenBanner' />
          <img src={x.mobImage} alt='' className='shortScreenBanner' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Banner
