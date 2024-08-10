import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/Products'
import { linksBanners } from '../data/arrays'
import { useDispatch, useSelector } from 'react-redux'
import { activeModal } from '../redux/actions/modalActive'
import { cartAction } from '../redux/actions/cartAction'
import Layout from './Layout'

const ProdType = () => {
  const params = useParams()
  let typeProducts = products.filter(
    (item) =>
      (item.collection === params.type && item.newArrival) ||
      item.type === params.type ||
      (params.type === 'flat-50' && item.salePrice === 50) ||
      (params.type === 'flat-40' && item.salePrice === 40) ||
      (params.type === 'flat-30' && item.salePrice === 30)
  )
  let banner = linksBanners.find(
    (item) =>
      (params.collection === 'sale' && item.link === 'sale') ||
      item.link === params.type
  )
  const dispatch = useDispatch()
  const isActiveModal = useSelector((store) => store.modalReducer.activeModalB)
  const addToCart = (prod) => {
    dispatch(activeModal(prod))
    document.body.style.overflowY = isActiveModal ? null : 'hidden'
    if (prod.collection !== 'western' && prod.collection !== 'ready-to-wear') {
      let size = prod.size.filter((x) => x.length > 0)
      dispatch(cartAction({ ...prod, qty: 1, selectedSize: size[0] }))
    }
  }

  return (
    <>
      <Layout>
        <div className='CollectionBanners'>
          <img src={banner.image} alt='' />
        </div>
        <div className='filtersSection'></div>
        <div className='productsSection'>
          {typeProducts.map((x, ind) => (
            <div className='product' key={ind}>
              <div className='img'>
                <Link to={`/${x.collection}/${x.type}/${x.category}/${x.sku}`}>
                  <img src={`/${x.images[0]}`} alt='' />
                  <img src={`/${x.images[1]}`} className='hoverImg' alt='' />
                </Link>
                <button onClick={() => addToCart(x)}>+Add To Bag</button>
                {x.newArrival && (
                  <>
                    <span className='newTag'>NEW</span>
                  </>
                )}
                {x.salePrice && (
                  <>
                    <span className='saleTag'>{x.salePrice}% Off</span>
                  </>
                )}
              </div>
              <div className='body'>
                <p className='prodTitle'>{x.title}</p>
                <p className='prodDesLong'>{x.description}</p>
                <p className='prodDesShort'>{x.description.slice(0, 25)}...</p>
                <p className='prodPrice'>Rs, {x.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export default ProdType
