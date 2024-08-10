import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decreaseAction,
  increaseAction,
  removeCartAction,
} from '../../../redux/actions/cartAction'

const QuickCart = ({ activeCartSidebar, activeCartSidebarFunc }) => {
  const cartList = useSelector((store) => store.cartReducer)
  const dispatch = useDispatch()

  const increaseQ = (prod) => {
    dispatch(increaseAction(prod))
  }
  const decreaseQ = (prod) => {
    dispatch(decreaseAction(prod))
  }
  const removeCart = (prod) => {
    dispatch(removeCartAction(prod))
  }
  let totalPrice = cartList.reduce((acc, item) => acc + item.price * item.qty, 0)
  return (
    <div
      className={`quickCartContainer ${activeCartSidebar ? 'activeCart' : ''} ${
        cartList.length > 1 && 'increaseQuickCartSize'
      }`}
    >
      <div className='quickCartHeader'>
        <div>
          <p>Bag Total:</p>
          <p className='bold'>Rs {totalPrice.toLocaleString()}</p>
        </div>
        <div className='cartCrossIcon' onClick={activeCartSidebarFunc}>
          <i className='fas fa-xmark'></i>
        </div>
      </div>
      {cartList.map((x, ind) => {
        let totalPrice = x.qty * x.price
        return (
          <>
            <div className='quickCartProductBox' key={ind}>
              <div className='quickCartContent'>
                <div className='left'>
                  <div className='leftImg'>
                    <img src={`/${x.images[0]}`} alt='' />
                  </div>
                  <div className='leftContent'>
                    <p>{cartList[0].title}</p>
                    <p>
                      <span className='bold'>Color:</span> {x.color.title}
                    </p>
                    <p>
                      <span className='bold'>Size:</span>{' '}
                      <span className='sizeNum'>{x.selectedSize}</span>
                    </p>
                    <p className='inStock'> {x.availability && 'In Stock'}</p>
                  </div>
                </div>
                <div className='right'>
                  <div className='removeCartItemIcon'>
                    <i
                      className='fas fa-xmark'
                      onClick={() => removeCart(x)}
                    ></i>
                  </div>
                </div>
              </div>
              <div className='quickCartBottom'>
                <div className='first'>
                  <p>Price</p>
                  <p className='bold'>Rs {x.price.toLocaleString()}</p>
                </div>
                <div className='second'>
                  <i
                    className='fas fa-minus'
                    onClick={() => x.qty > 1 && decreaseQ(x)}
                  ></i>
                  <span className='qunNum'>{x.qty}</span>
                  <i className='fas fa-plus' onClick={() => increaseQ(x)}></i>
                </div>
                <div className='third'>
                  <p>Total</p>
                  <p className='bold'>Rs {totalPrice.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <hr />
          </>
        )
      })}

      <div className='quickCartBottomSection'>
        <div className='button'>
          <button>View Bag</button>
        </div>
        <div className='button'>
          <button>checkout</button>
        </div>
      </div>
    </div>
  )
}

export default QuickCart
