import React, { useState } from 'react'
import ShopLinks from './MobNav/ShopLinks'
import AccountLinks from './MobNav/AccountLinks'

const MobNavLinks = ({ activeMobNav, activeMobNavFunc }) => {
  const [activeTab, setActiveTab] = useState('bars')
  return (
    <div className={`mobNavLinks ${activeMobNav ? 'activeMobNav': ''}`}>
      <div className='headerSection'>
        <div
          className={activeTab === 'bars' ? 'activeTab' : ''}
          onClick={() => setActiveTab('bars')}
        >
          <i className='fas fa-bars'></i>
          <span>Shop</span>
        </div>
        <div
          className={activeTab === 'accounts' ? 'activeTab' : ''}
          onClick={() => setActiveTab('accounts')}
        >
          <i className='fas fa-user'></i>
          <span>account</span>
        </div>
        <div onClick={activeMobNavFunc}>
          <i className='fas fa-xmark'></i>
          <span>close</span>
        </div>
      </div>
      <div className='contentSection'>
        {activeTab === 'bars' && <ShopLinks />}
        {activeTab === 'accounts' && <AccountLinks />}
      </div>
    </div>
  )
}

export default MobNavLinks
