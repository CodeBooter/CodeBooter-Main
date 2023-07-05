import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex justify-between alignment-center p-10'>
 <Link to="/">CodeBooter</Link>

<nav>
    <Link to="/about">About</Link>
    <Link to="/internship">Internship</Link>
</nav>

    </div>
  )
}

export default Navbar