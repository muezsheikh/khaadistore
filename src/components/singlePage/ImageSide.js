import React from 'react'

const ImageSide = ({ product, image, setImage }) => {
  return (
    <>
      <div className='sideImages'>
        {product.images.map((x, ind) => (
          <div
            key={ind}
            onClick={() => setImage(ind)}
            className={image === ind ? 'activeImage' : ''}
          >
            <img src={`/${x}`} alt='' />
          </div>
        ))}
      </div>
      <div className='mainImg'>
        <img src={`/${product.images[image]}`} alt='' />
      </div>
    </>
  )
}

export default ImageSide
