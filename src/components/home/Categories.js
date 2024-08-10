import React from 'react'
import { categories } from '../../data/arrays'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categoriesContainer'>
      {categories.map((x,ind) => (
        <div key={ind}>
          <Link to={`/${x.link}`}>
            <img src={x.image} alt='' />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Categories
