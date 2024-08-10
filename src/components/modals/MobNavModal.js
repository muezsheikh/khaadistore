import React from 'react'
import MobNavLinks from '../global/navbar/MobNavLinks'

const MobNavModal = ({ activeMobNav, activeMobNavFunc }) => {
  return (
    <div
      className={`mobNavModal ${activeMobNav ? 'activeMobNavModal' : ''}`}
    >
      <MobNavLinks activeMobNav={activeMobNav} activeMobNavFunc={activeMobNavFunc} />
    </div>
  )
}

export default MobNavModal
