import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../../../data/Products'
const Search = ({ activeSearchBar }) => {
  const [inputData, setInputData] = useState('')
  const searchedProducts = products.filter((prod) =>
    prod.title.toLowerCase().includes(inputData.trim().toLowerCase())
  )
  console.log(inputData)
  console.log(searchedProducts)
  const addToCart = () => {}
  return (
    <div
      className={`searchContainer ${activeSearchBar ? 'activeSearchBar' : ''}`}
    >
      <div className='searchInput'>
        <input
          type='text'
          placeholder='Search a Product....'
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>
      {inputData.length > 0 && (
        <>
          <div className='searchProductsContainer'>
            {searchedProducts.length ? (
              <>
                <div className='searchProducts'>
                  {searchedProducts.map((x, ind) => (
                    <div className='product' key={ind}>
                      <div className='img'>
                        <Link
                          to={`/${x.collection}/${x.type}/${x.category}/${x.sku}`}
                        >
                          <img src={`/${x.images[0]}`} alt='' />
                          <img
                            src={`/${x.images[1]}`}
                            className='hoverImg'
                            alt=''
                          />
                        </Link>
                        <button onClick={() => addToCart(x)}>
                          +Add To Bag
                        </button>
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
                        <p className='prodDesShort'>
                          {x.description.slice(0, 25)}...
                        </p>
                        <p className='prodPrice'>Rs, {x.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className='noProdFound'>
                <p>
                  no product found with the title of{' '}
                  <span className='enteredData'>"{inputData}"</span>
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Search
