import React from 'react'
import { products } from './../../data/Products'
import { Link } from 'react-router-dom'
import { catBanners } from '../../data/arrays'
import ProductSlider from './ProductSlider'

const CatSection = () => {
  return (
    <div className=''>
      {catBanners.map((x, ind) => (
        <div className={`categoryContainer ${x.link}`} key={ind}>
          <div className='mainImg'>
            <Link to={`/${x.link}`}>
              <img src={x.image} alt='' />
            </Link>
          </div>
          <div className='categoryProducts'>
            <div className='heading'>
              <p>{x.title}</p>
            </div>
            <div className='productsList'>
              <ProductSlider products={products} x={x} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CatSection
