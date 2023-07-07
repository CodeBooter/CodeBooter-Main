import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className='flex justify-between h-10 fixed top-0 left-0 right-0'>
      <Link to="/">CodeBooter</Link>
      <nav >
        <Link to="/about">About</Link>
        <Link to='/internship'>Internship</Link>
      </nav>
</header>
      )
}

      export default Navbar