import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeModal } from '../../redux/actions/modalActive'
import { cartAction } from '../../redux/actions/cartAction'
import { useNavigate } from 'react-router-dom'

const AddToCartModal = () => {
  const isActiveModal = useSelector((store) => store.modalReducer.activeModalB)
  const modalProduct = useSelector((store) => store.modalReducer.product)
  const [size, setSize] = useState(0)
  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(activeModal())
    document.body.style.overflowY = null
  }

  let selectedSize = modalProduct?.size.find((item, ind) => ind === size)
  const navigate = useNavigate()
  const sentToCart = () => {
    const newProd = { ...modalProduct, qty: 1, selectedSize: selectedSize }
    dispatch(cartAction(newProd))
    closeModal()
  }
  const detailFunc = () => {
    navigate(
      `/${modalProduct?.collection}/${modalProduct?.type}/${modalProduct?.category}/${modalProduct?.sku}`
    )
    closeModal()
  }
  return (
    <div className={`cartButtonModal ${isActiveModal ? 'activeModal' : ''}`}>
      <div className={`cartModalBox ${isActiveModal ? 'activeModal' : ''}`}>
        <div className='cartModalImg'>
          <img src={`/${modalProduct?.images[0]}`} alt='' />
        </div>
        <div className='cartModalContent'>
          <div className='top'>
            <i className='fas fa-xmark' onClick={closeModal}></i>
          </div>
          <div className='middle'>
            <h3>{modalProduct?.title}</h3>
            <p>was successfully added to your shopping bag.</p>
            {modalProduct?.size.length > 1 && (
              <div className='sizeBox'>
                <p>Size:</p>
                <div>
                  {modalProduct?.size.map((x, ind) => (
                    <p
                      key={ind}
                      onClick={() => setSize(ind)}
                      className={size === ind ? 'activeSize' : ''}
                    >
                      {x}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className='bottom'>
            {modalProduct?.size.length > 1 ? (
              <button onClick={sentToCart}>+add to bag</button>
            ) : (
              <button onClick={closeModal}>Continue Shopping</button>
            )}
            <button onClick={detailFunc}>View Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddToCartModal
