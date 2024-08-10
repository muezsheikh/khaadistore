import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './styles/Home.css'
import './styles/Navbar.css'
import './styles/Footer.css'
import './styles/ProductUi.css'
import './styles/QuickCart.css'
import './styles/SingleProd.css'
import './styles/MobNav.css'
import './styles/Modals.css'
import './styles/SearchSystem.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
