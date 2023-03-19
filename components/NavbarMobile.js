import Link from 'next/link';
import { useState } from 'react'

export default function NavbarMobile({ showBlurCallback, showBlurStatus }) {

  const statusOrder = {
    0: {
      'status': 'Order Placed',
      'date': '2021-07-01',
      'time': '12:00:00',
      'description': 'Your order has been placed and is being processed.',
      'progress': '25%',
      'active': true
    },
    1: {
      'status': 'Editing Your Files',
      'date': '2021-07-01',
      'time': '12:00:00',
      'description': 'Your video is being edited and will be packaged soon.',
      'progress': '50%',
      'active': true
    },
    2: {
      'status': 'Packaging Your Order',
      'date': '2021-07-01',
      'time': '12:00:00',
      'description': 'Your video is being packaged and will be shipped soon.',
      'progress': '75%',
      'active': false
    },
    3: {
      'status': 'Order Shipped',
      'date': '2021-07-01',
      'time': '12:00:00',
      'description': 'Your order has been shipped and is on its way to you.',
      'progress': '100%',
      'active': false
    }
  }

  const [toggleMobileMenu, setToggleMobileMenu] = useState(showBlurStatus);

  const setToggleMobileMenuHandler = () => {
    setToggleMobileMenu(!toggleMobileMenu);
    showBlurCallback(!toggleMobileMenu);
  }

  return (
    <>
      <header className="navbar-wrapper">
        <nav className={'navbar-mobile show-' + toggleMobileMenu}>
          <div className='navbar-mobile-header'>

            <img src="images/favicon-96x96.png" alt="logo" />
              {/* <h1>Hello, Guest!</h1> */}
            <button className="hamburger-menu" onClick={setToggleMobileMenuHandler} aria-label="toggle mobile menu">
              <div>
                <i className="fas fa-times" alt="close-icon"></i>
                <i className="fas fa-bars" alt="hamburger-icon"></i>
              </div>
            </button>
          </div>
          <ul>
            <li><Link onClick={setToggleMobileMenuHandler} href="/">Home</Link></li>
            <li><Link onClick={setToggleMobileMenuHandler} href="/services">Services</Link></li>
            <li><Link onClick={setToggleMobileMenuHandler} href="/pricing">Pricing</Link></li>
            <li><Link onClick={setToggleMobileMenuHandler} href="/about">FAQ</Link></li>
            <li><Link onClick={setToggleMobileMenuHandler} href="/FaQ">About Us</Link></li>
            <li className="animation start-home"></li>
          </ul>
          {/* <Link to="/contact-us" className="btn btn-primary">Contact Us</Link> */}
        </nav>
      </header>
    </>
  )
}