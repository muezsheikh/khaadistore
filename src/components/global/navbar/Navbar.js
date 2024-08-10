import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import QuickCart from './QuickCart'
import { useSelector } from 'react-redux'
import MobNavModal from '../../modals/MobNavModal'
import Search from './SearchSystem/Search'

const Navbar = () => {
  const cartList = useSelector((store) => store.cartReducer)
  const [activeCartSidebar, setActiveCartSidebar] = useState(false)
  const activeCartSidebarFunc = () => {
    setActiveCartSidebar(!activeCartSidebar)
  }
  const [cartEmpty, setCartEmpty] = useState(false)
  const cartEmptyFunc = () => {
    setCartEmpty(true)
  }
  useEffect(() => {
    setTimeout(() => {
      setCartEmpty(false)
    }, 3000)
  }, [cartEmpty])
  const [activeMobNav, setActiveMobNav] = useState(false)
  const activeMobNavFunc = () => {
    setActiveMobNav(!activeMobNav)
  }
  const [activeSearchBar, setActiveSearchBar] = useState(false)
  const activeSearchBarFunc = () => {
    setActiveSearchBar(!activeSearchBar)
  }
  return (
    <>
      <div className='topHeader'>
        <p>
          It's SALE Time! You can now shop for your favorite items at up to 50%
          OFF. <Link>Shop Now</Link>
        </p>
      </div>
      <div className='navbar'>
        <div className='navbarContent'>
          <div className='barsIcon' onClick={activeMobNavFunc}>
            <i className='fa-solid fa-bars-staggered'></i>
          </div>
          <div className='logo'>
            <Link to={'/'}>
              <img src='/pics/logo.svg' alt='' />
            </Link>
          </div>
          <MobNavModal
            activeMobNav={activeMobNav}
            activeMobNavFunc={activeMobNavFunc}
          />
          <div className='navLinks'>
            <ul>
              <li className='sameDrop'>
                <Link to={'/sale'}>Sale</Link>
                <ul className='dropdown sameDropdown'>
                  <li>
                    <Link to={'/sale/flat-50'}>
                      <img src='/pics/saleImage1.webp' alt='' />
                      <h3>flat 50% off</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/sale/flat-40'}>
                      <img src='/pics/saleImage2.webp' alt='' />
                      <h3>flat 40% off</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/sale/flat-30'}>
                      <img src='/pics/saleImage3.webp' alt='' />
                      <h3>flat 30% off</h3>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='sameDrop'>
                <Link to={'/new-in'}>New In</Link>
                <ul className='dropdown sameDropdown'>
                  <li>
                    <Link to={'/new-in/ready-to-wear'}>
                      <img src='/pics/newImage1.webp' alt='' />
                      <h3>Ready To Wear</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/new-in/fabrics'}>
                      <img src='/pics/newImage2.webp' alt='' />
                      <h3>Fabrics</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/new-in/western'}>
                      <img src='/pics/newImage3.webp' alt='' />
                      <h3>Western</h3>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='fabrics sameDrop'>
                <Link to={'/fabrics'}>Fabrics</Link>
                <ul className='dropdown sameDropdown'>
                  <li>
                    <Link to={'/fabrics/3-piece-fabrics'}>
                      <h3>3 Piece Fabrics</h3>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          to={'/fabrics/3-piece-fabrics/Embroidered Full Suit'}
                        >
                          Embroidered Full Suit
                        </Link>
                      </li>
                      <li>
                        <Link to={'/fabrics/3-piece-fabrics/Printed Full Suit'}>
                          Printed Full Suit
                        </Link>
                      </li>
                      <li>
                        <Link to={'/fabrics/3-piece-fabrics/Khaas Full Suit'}>
                          Khaas Full Suit
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={'/fabrics/2-piece-fabrics'}>
                      <h3>2 Piece Fabrics</h3>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          to={'/fabrics/2-piece-fabrics/Printed Top Bottoms'}
                        >
                          Printed Top Bottoms
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={
                            '/fabrics/2-piece-fabrics/Embroidered Top Bottoms'
                          }
                        >
                          Embroidered Top Bottoms
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={'/fabrics/2-piece-fabrics/Printed Top Dupatta'}
                        >
                          Printed Top Dupatta
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={
                            '/fabrics/2-piece-fabrics/Embroidered Top Dupatta'
                          }
                        >
                          Embroidered Top Dupatta
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <img src='/pics/fabDrop.webp' alt='' />
                  </li>
                </ul>
              </li>
              <li className='readyToWear sameDrop'>
                <Link to={'/ready-to-wear'}>Ready To Wear</Link>
                <ul className='dropdown sameDropdown'>
                  <li>
                    <Link to={'/ready-to-wear/eastern-pret'}>
                      <h3>Eastern Pret</h3>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          to={'/ready-to-wear/eastern-pret/Embroidered Kurta'}
                        >
                          Embroidered Kurta
                        </Link>
                      </li>
                      <li>
                        <Link to={'/ready-to-wear/eastern-pret/Printed Kurta'}>
                          Printed Kurta
                        </Link>
                      </li>
                      <li>
                        <Link to={'/ready-to-wear/eastern-pret/Basic Kurta'}>
                          Basic Kurta
                        </Link>
                      </li>
                      <li>
                        <Link to={'/ready-to-wear/eastern-pret/Saree'}>
                          Saree
                        </Link>
                      </li>
                      <li>
                        <Link to={'/ready-to-wear/eastern-pret/Yarn Dyed'}>
                          Yarn Dyed
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={'/ready-to-wear/bottoms-and-separates'}>
                      <h3>Bottoms and Separates</h3>
                    </Link>
                    <ul>
                      <li>
                        <Link to={'/ready-to-wear/bottoms-and-separates/Pants'}>
                          Pants
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={'/ready-to-wear/bottoms-and-separates/Shalwar'}
                        >
                          Shalwar
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={'/ready-to-wear/bottoms-and-separates/Dupatta'}
                        >
                          Dupatta
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={'/ready-to-wear/bottoms-and-separates/Stoles'}
                        >
                          Stoles
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <img src='/pics/readyDrop.jpg' alt='' />
                  </li>
                </ul>
              </li>
              <li className='western'>
                <Link to={'/western'}>Western</Link>
                <ul className='dropdown'>
                  <li>
                    <Link to={'/western/outerwear'}>
                      <h3>Outerwear</h3>
                    </Link>
                    <ul>
                      <li>
                        <Link to={'/western/outerwear/Sweatshirts'}>
                          Sweatshirts
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={'/western/tops'}>
                      <h3>Tops</h3>
                    </Link>
                    <ul>
                      <li>
                        <Link to={'/western/tops/Blouses'}>Blouses</Link>
                      </li>
                      <li>
                        <Link to={'/western/tops/Shirts'}>Shirts</Link>
                      </li>
                      <li>
                        <Link to={'/western/tops/T-Shirts'}>T-Shirts</Link>
                      </li>
                      <li>
                        <Link to={'/western/tops/Polos'}>Polos</Link>
                      </li>
                      <li>
                        <Link to={'/western/tops/Tunic'}>Tunic</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={'/western/dresses'}>
                      <h3>Dresses</h3>
                    </Link>
                    <ul>
                      <li>
                        <Link to={'/western/dresses/Maxi Dress'}>
                          Maxi Dress
                        </Link>
                      </li>
                      <li>
                        <Link to={'/western/dresses/Jumpsuit'}>Jumsuit</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={'/western/bottoms'}>
                      <h3>Bottoms</h3>
                    </Link>
                    <ul>
                      <li>
                        <Link to={'/western/bottoms/Pants'}>Pants</Link>
                      </li>
                      <li>
                        <Link to={'/western/bottoms/Tights'}>Tights</Link>
                      </li>
                      <li>
                        <Link to={'/western/bottoms/Jeans'}>Jeans</Link>
                      </li>
                      <li>
                        <Link to={'/western/bottoms/Skirt'}>Skirt</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='westernDropImg'>
                    <img src='/pics/westernDrop.jpg' alt='' />
                  </li>
                </ul>
              </li>
              <li>
                <Link to={'/'}>Chapter 2</Link>
              </li>
            </ul>
          </div>
          <div className='icons'>
            <div className='truckIcon'>
              <i className='fas fa-truck'></i>
              <span>Track</span>
            </div>
            <div className='searchIcon' onClick={activeSearchBarFunc}>
              <i className='fas fa-search'></i>
              <span className='iconTitle'>Search</span>
            </div>
              <Search activeSearchBar={activeSearchBar} />
            <div className='userIcon'>
              <i className='fas fa-user'></i>
              <span>Account</span>
            </div>
            <div
              className='cartIcon'
              onClick={
                cartList.length > 0 ? activeCartSidebarFunc : cartEmptyFunc
              }
            >
              <i className='fas fa-shopping-bag'></i>
              <span className='cartListNum'>{cartList.length}</span>
              <span className='iconTitle'>Bag</span>
              {cartEmpty && (
                <span className={`emptyMsg ${cartEmpty ? 'activeMsg' : ''}`}>
                  Cart is Empty!
                </span>
              )}
            </div>
          </div>
          {cartList.length > 0 && (
            <QuickCart
              activeCartSidebar={activeCartSidebar}
              activeCartSidebarFunc={activeCartSidebarFunc}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar
