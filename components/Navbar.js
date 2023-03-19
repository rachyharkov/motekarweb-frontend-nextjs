import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Navbar() {

  const router = useRouter()
  const location  = router.pathname.split('/')[1]
  // get first path
  const [currentPath, setCurrentPath] = useState(null)

  useEffect(() => {
    console.log(location)
    setCurrentPath(location)
  }, [location])

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-desktop">
        <ul>
          <li className={currentPath == '' ? 'active' : ''}><Link href='/'>Home</Link></li>
          <li className={currentPath == 'services' ? 'active' : ''}><Link href='/services'>services</Link></li>
          <li className={currentPath == 'pricing' ? 'active' : ''}><Link href='/pricing'>pricing</Link></li>
          <li className={currentPath == 'about' ? 'active' : ''}><Link href='/about'>about</Link></li>
          <li className={currentPath == 'faq' ? 'active' : ''}><Link href='/faq'>FaQ</Link></li>
          <li className="animation start-home"></li>
        </ul>
      </nav>
    </header>
  )
}