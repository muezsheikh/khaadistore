import React from 'react'
import { Link } from 'react-router-dom'

const AccountLinks = () => {
  return (
    <>
      <div className='signIn'>
        <div className='head'>
          <Link>Sign In</Link>
        </div>
      </div>
      <div className='signUp'>
        <div className='head'>
          <Link>Create an Account</Link>
        </div>
      </div>
    </>
  )
}

export default AccountLinks
