import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { mobNavLinksArr } from '../../../../data/arrays'

const ShopLinks = () => {
  const [activeLink, setActiveLink] = useState(false)
  const [tabName, setTabName] = useState('')
  const activeLinkFunc = (name) => {
    setActiveLink(!activeLink)
    setTabName(name)
  }
  return (
    <>
      <div className='sale'>
        <div className='head' onClick={() => activeLinkFunc('sale')}>
          <Link to={'/sale'}>
            <p>Sale</p>
          </Link>
          <i
            className={`fas fa-${
              tabName === 'sale' && activeLink ? 'minus' : 'plus'
            }`}
          ></i>
        </div>
        <div
          className={`content ${
            tabName === 'sale' && activeLink && 'activeTab'
          }`}
        >
          <ul>
            <li>
              <Link to={'/sale/flat-50'}>flat 50%off</Link>
            </li>
            <li>
              <Link to={'/sale/flat-40'}>flat 40%off</Link>
            </li>
            <li>
              <Link to={'/sale/flat-30'}>flat 30%off</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='newIn'>
        <div className='head' onClick={() => activeLinkFunc('newIn')}>
          <Link to={'/new-in'}>
            <p>new in</p>
          </Link>
          <i
            className={`fas fa-${
              tabName === 'newIn' && activeLink ? 'minus' : 'plus'
            }`}
          ></i>
        </div>
        <div
          className={`content ${
            tabName === 'newIn' && activeLink && 'activeTab'
          }`}
        >
          <ul>
            <li>
              <Link to={'/new-in/ready-to-wear'}>ready to wear</Link>
            </li>
            <li>
              <Link to={'/new-in/fabrics'}>fabrics</Link>
            </li>
            <li>
              <Link to={'/new-in/western'}>western</Link>
            </li>
          </ul>
        </div>
      </div>
      {mobNavLinksArr.map((x, ind) => (
        <div className='fabrics sameLink' key={ind}>
          <div className='head' onClick={() => activeLinkFunc(x.tabName)}>
            <Link to={`/${x.link}`}>
              <p>{x.linkTitle}</p>
            </Link>
            <i
              className={`fas fa-${
                tabName === x.tabName && activeLink ? 'minus' : 'plus'
              }`}
            ></i>
          </div>
          <div
            className={`content ${
              tabName === x.tabName && activeLink && 'activeTab'
            }`}
          >
            <ul>
              {x.nestedLink.map((y, YInd) => (
                <li key={YInd}>
                  <Link to={`/${x.link}/${y.link}`}>
                    <p className='linkHeading'>{y.linkTitle}</p>
                  </Link>
                  <ul>
                    {y.links.map((z,ZInd) => (
                      <li key={ZInd}>
                        <Link to={`/${x.link}/${y.link}/${z}`}>{z}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}

export default ShopLinks
