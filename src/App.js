import React from 'react'
import Routing from './routes/Routing'
import AddToCartModal from './components/modals/AddToCartModal'

const App = () => {
  return (
    <div className='App'>
      <AddToCartModal />
      <Routing />
    </div>
  )
}

export default App
