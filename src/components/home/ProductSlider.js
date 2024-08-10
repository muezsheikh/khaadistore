import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { activeModal } from '../../redux/actions/modalActive'
import { cartAction } from '../../redux/actions/cartAction'

const ProductSlider = ({ products, x }) => {
  const isActiveModal = useSelector((store) => store.modalReducer.activeModalB)
  const dispatch = useDispatch()
  console.log(isActiveModal)
  const activeModalFunc = (prod) => {
    dispatch(activeModal(prod))
    document.body.style.overflowY = isActiveModal ? null : 'hidden'
    if (prod.collection !== 'western' && prod.collection !== 'ready-to-wear') {
      let size = prod.size.filter((x) => x.length > 0)
      dispatch(cartAction({ ...prod, qty: 1, selectedSize: size[0] }))
    }
  }
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      freeMode={true}
      modules={[FreeMode, Pagination, Autoplay]}
      className='mySwiper'
    >
      {products
        .filter(
          (item) =>
            item.collection === x.link || (x.link === 'sale' && item.salePrice)
        )

        .map((prod, ind) => (
          <SwiperSlide key={ind}>
            <div className='product'>
              <div className='img'>
                <Link
                  to={`/${prod.collection}/${prod.type}/${prod.category}/${prod.sku}`}
                >
                  <img src={`/${prod.images[0]}`} alt='' />
                  <img src={`/${prod.images[1]}`} className='hoverImg' alt='' />
                </Link>
                {prod.newArrival && (
                  <>
                    <span className='newTag'>new</span>
                  </>
                )}
                {prod.salePrice && (
                  <>
                    <span className='saleTag'>{prod.salePrice}% off</span>
                  </>
                )}
                <button onClick={() => activeModalFunc(prod)}>
                  add to bag+
                </button>
              </div>
              <div className='body'>
                <h3>{prod.title}</h3>
                <p className='longDes'>{prod.description}</p>
                <p className='shortDes'>{prod.description.slice(0, 20)}...</p>
                <p>Rs,{prod.price.toLocaleString()}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default ProductSlider
