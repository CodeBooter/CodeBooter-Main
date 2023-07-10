import { NavLink, NavNavLink } from "react-router-dom"
import {motion} from 'framer-motion'


let easeing = [0.6, -0.05, 0.01, 0.99];



function Navbar() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#FFA8A8"
  }

  return (
    <div className="flex justify-between items-center fixed top-0 left-0 right-0 text-white bg-white p-4 h-20 mx-20">
      <div>
      <NavLink to='/' className="text-2xl text-black">
      <motion.h6
        whileHover={{scale: 1.1 }}
        transition={{type: 'spring', stiffness: 300
        }}>
        Code<span className="text-main">Booter</span>
        </motion.h6>
        </NavLink>
      </div>

      <div className="flex">
      <NavLink to='/about' className="p-2 text-black"
      style={({ isActive }) => isActive ? activeStyles : null}>
        <motion.h6
        whileHover={{scale: 1.1 }}
        transition={{type: 'spring', stiffness: 300
        }}>
        About
        </motion.h6>
        </NavLink>
      <NavLink to='/internship' className="p-2 text-black"
      style={({ isActive }) => isActive ? activeStyles : null}>
      <motion.h6
        whileHover={{scale: 1.1 }}
        transition={{type: 'spring', stiffness: 300
        }}>
        Internship
        </motion.h6>
        </NavLink>
      <NavLink to='/project' className="p-2 text-black"
      style={({ isActive }) => isActive ? activeStyles : null}>
      <motion.h6
        whileHover={{scale: 1.1 }}
        transition={{type: 'spring', stiffness: 300
        }}>
        Live Projects
        </motion.h6>
        </NavLink>
      <NavLink to='/product' className="p-2 text-black"
      style={({ isActive }) => isActive ? activeStyles : null}>
      <motion.h6
        whileHover={{scale: 1.1 }}
        transition={{type: 'spring', stiffness: 300
        }}>
        Product
        </motion.h6>
        </NavLink>
      <NavLink to='/login'>
        <motion.button className="text-black border border-2 border-black py-2 px-5 rounded-full"
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