import { NavLink, NavNavLink } from "react-router-dom"
import {motion} from 'framer-motion'


let easeing = [0.6, -0.05, 0.01, 0.99];



function Navbar() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#ff8ba8"
  }

  return (
    <div className="nav flex justify-between items-center fixed top-0 left-0 right-0 p-4 px-8 sh-20">
      <div>
      <NavLink to='/' className="text-2xl nav-text">
      <motion.h6
        whileHover={{scale: 1.1 }}
        transition={{type: 'spring', stiffness: 300
        }}>
        <span className="code">Code</span><span className="text-main">Booter</span>
        </motion.h6>
        </NavLink>
      </div>

      <div className="flex">
      <NavLink to='/about' className="p-2 nav-text"
      style={({ isActive }) => isActive ? activeStyles : null}>
        <motion.h6
        whileHover={{scale: 1.1 }}
        transition={{type: 'spring', stiffness: 300
        }}>
        About
        </motion.h6>
        </NavLink>
      <NavLink to='/internship' className="p-2 nav-text"
      style={({ isActive }) => isActive ? activeStyles : null}>
      <motion.h6
        whileHover={{scale: 1.1 }}
        transition={{type: 'spring', stiffness: 300
        }}>
        Internship
        </motion.h6>
        </NavLink>
      <NavLink to='/project' className="p-2 nav-text"
      style={({ isActive }) => isActive ? activeStyles : null}>
      <motion.h6
        whileHover={{scale: 1.1 }}
        transition={{type: 'spring', stiffness: 300
        }}>
        Live Projects
        </motion.h6>
        </NavLink>
      <NavLink to='/product' className="p-2 nav-text"
      style={({ isActive }) => isActive ? activeStyles : null}>
      <motion.h6
        whileHover={{scale: 1.1 }}
        transition={{type: 'spring', stiffness: 300
        }}>
        Product
        </motion.h6>
        </NavLink>
      <NavLink to='/login'>
        <motion.button className="nav-text border border-2 border-main py-2 px-5 rounded-full"
         whileHover={{scale: 1.1 }}
         transition={{type: 'spring', stiffness: 300
         }}>
        SIGN IN
          </motion.button></NavLink>
      </div>

    </div>
  );
}

      export default Navbar;