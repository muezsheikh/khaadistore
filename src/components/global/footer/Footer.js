import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='footerCategories'>
        <div className='footerCat1'>
          <div className='footerCatImg'>
            <img src='/pics/shipping.svg' alt='' />
          </div>
          <div className='footerBody'>
            <p>shipping charge</p>
            <p>starting for Rs.120</p>
          </div>
        </div>
        <div className='footerCat2'>
          <div className='footerCatImg'>
            <img src='/pics/support.svg' alt='' />
          </div>
          <div className='footerBody'>
            <p>support 24/7</p>
            <p>Contact us 24 hours a day, 7 days a week</p>
          </div>
        </div>
        <div className='footerCat3'>
          <div className='footerCatImg'>
            <img src='/pics/track.svg' alt='' />
          </div>
          <div className='footerBody'>
            <p>Track your order</p>
            <p>Track your order for quick updates</p>
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='footer1'>
          <div className='footer1content'>
            <h3>be the first to know</h3>
            <p>
              Sign up for our newsletter to receive updates on special offers,
              news <br /> and events.
            </p>
          </div>
          <div className='footerDiv1input'>
            <input type='text' placeholder='E-mail Address' />
            <button>Subscribe</button>
          </div>
          <div className='footerDiv1img'>
            <img src='/pics/twitter.png' alt='' />
            <img src='/pics/youtube.webp' alt='' />
            <img src='/pics/fb.png' alt='' />
            <img src='/pics/insta.png' alt='' />
          </div>
        </div>
        <div className='footer2'>
          <div className='footerDiv1'>
            <h3>Get in touch</h3>
            <div className='footerBody'>
              <h3>Address</h3>
              <p>
                22nd Floor, Sky Tower B- East Wing, <br /> Dolmen City, Block 4,
                Marine Drive Clifton, <br /> Karachi, Pakistan.
              </p>
              <h3>Phone</h3>
              <p>0800 74007</p>
              <h3>EMAIL</h3>
              <p>customercare@khaadi.com</p>
            </div>
          </div>
          <div className='footerDiv1'>
            <h3>Our Company</h3>
            <div className='footerBody'>
              <li>Support</li>
              <li>Help us</li>
            </div>
          </div>
          <div className='footerDiv1'>
            <h3>customer support</h3>
            <div className='footerBody'>
              <li>Customer service</li>
              <li>support help</li>
              <li>disclaimer</li>
            </div>
          </div>
          <div className='footerDiv1'>
            <h3>Shipping</h3>
            <div className='footerBody'>
              <li>Shipping $ Handling</li>
              <li>Return $ Exchange</li>
            </div>
          </div>
          <div className='footerDiv1'>
            <h3>help</h3>
            <div className='footerBody'>
              <li>Track your Order</li>
              <li>Term $ condition</li>
              <li>Privacy policy</li>
            </div>
          </div>
        </div>
        <div className='footer3'>
          <div className='footer3img'>
            <p>100% Safe Cheackout</p>
            <img src='/pics/pay.webp' alt='' />
          </div>
          <div className='footer3img'>
            <p>Secured By</p>
            <img src='/pics/secured.gif' alt='' />
          </div>
          <div className='footer3img2'>
            <img src='/pics/Khaadi-Logo.png' alt='' />
          </div>
          <div className='footer3img3'>
            <p>
              Copyright © 2023 Khaadi Corporation Limited & Khaadi Pakistan SMC
              Pvt. Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
