import React from 'react'

const ContentSide = ({
  product,
  changeSize,
  quantity,
  setQuantity,
  setChangeSize,
  addToCart,
}) => {
  return (
    <>
      <div className='first'>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Rs {product.price.toLocaleString()}</p>
      </div>
      <div className='second'>
        <p>
          Availability:{' '}
          {product.availability ? (
            <span className='inStock'>In Stock</span>
          ) : (
            <span className='outStock'>Out of Stock</span>
          )}
        </p>
        <p>SKU: {product.sku}</p>
      </div>
      <div className='third'>
        <div className='color'>
          <p>Color</p>
          <div className='colorBox' style={{ backgroundColor: 'white' }}>
            <div style={{ backgroundColor: product.color.code }}></div>
            <span className='colorNameTag'>{product.color.title}</span>
          </div>
        </div>
        <div className='size'>
          <p>Size:</p>
          {product.size.map((x, ind) => (
            <div className='sizeBox' key={ind}>
              <p
                className={changeSize === ind ? 'activeSize' : ''}
                onClick={() => setChangeSize(ind)}
              >
                
                <span>{x}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='fourth'>
        <div className='quantityBox'>
          <i
            className='fas fa-minus'
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          ></i>
          <span className='quantityNum'>{quantity}</span>
          <i
            className='fas fa-plus'
            onClick={() => setQuantity(quantity + 1)}
          ></i>
        </div>
        <div className='singleButton'>
          <button onClick={() => addToCart(product, quantity)}>+Add To Bag</button>
        </div>
      </div>
    </>
  )
}

export default ContentSide
