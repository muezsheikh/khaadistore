import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/Products'
import { ASize, NSize } from '../data/arrays'
import { useDispatch, useSelector } from 'react-redux'
import HeaderSide from '../components/singlePage/HeaderSide'
import ImageSide from '../components/singlePage/ImageSide'
import ContentSide from '../components/singlePage/ContentSide'
import Details from '../components/singlePage/Details'
import { cartAction } from '../redux/actions/cartAction'
import { activeModal } from '../redux/actions/modalActive'
import Layout from './Layout'
const SingleProd = () => {
  const params = useParams()
  let product = products.find((item) => item.sku === params.id)
  const [changeSize, setChangeSize] = useState(0)
  let size = product.size.find((item, ind) => ind === changeSize)
  const [image, setImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [details, setDetails] = useState('details')
  const [sizes, setSizes] = useState([])
  console.log(quantity)
  useEffect(() => {
    if (params.collection === 'western') {
      setSizes(ASize)
    } else {
      setSizes(NSize)
    }
  }, [params.collection])
  const dispatch = useDispatch()
  const isActiveModal = useSelector(store => store.modalReducer.activeModalB)
  const addToCart = (prod, qty) => {
    dispatch(activeModal(prod))
    document.body.style.overflowY = isActiveModal ? null : 'hidden'
    let newProd = { ...prod, qty: qty, selectedSize: size }
    console.log('sssss', qty)
    dispatch(cartAction(newProd, qty))
  }
  return (
    <>
      <Layout>
        <div className='singleHeader'>
          <HeaderSide product={product} />
        </div>
        <div className='singleProdContainer'>
          <div className='singleProdImgsSide'>
            <ImageSide setImage={setImage} image={image} product={product} />
          </div>
          <div className='singleProdContent'>
            <ContentSide
              product={product}
              changeSize={changeSize}
              setChangeSize={setChangeSize}
              quantity={quantity}
              setQuantity={setQuantity}
              addToCart={addToCart}
            />
            <Details
              params={params}
              product={product}
              details={details}
              setDetails={setDetails}
              sizes={sizes}
            />
          </div>
        </div>
        {/* <div className='singleProdBottom'></div> */}
      </Layout>
    </>
  )
}

export default SingleProd
