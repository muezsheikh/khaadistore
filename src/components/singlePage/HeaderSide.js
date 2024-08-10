import React from 'react'
import { Link } from 'react-router-dom'
const HeaderSide = ({ product }) => {
  return (
    <>
      <div className='content'>
        <Link to={`/`}>Home</Link>/
        <Link to={`/${product.collection}`}>{product.collection}</Link>/
        <Link to={`/${product.collection}/${product.type}`}>
          {product.type}
        </Link>
        /
        <Link to={`/${product.collection}/${product.type}/${product.category}`}>
          {product.category}
        </Link>
        /<p>{product.title}</p>
      </div>
    </>
  )
}

export default HeaderSide
