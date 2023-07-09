import { Link } from "react-router-dom"

function Navbar() {

  return (
    <div className="flex justify-between items-center fixed top-0 left-0 right-0 text-white bg-white p-4 h-20 mx-20">
      <div>
      <Link to='/' className="text-2xl text-black">Code<span className="text-violet-200">Booter</span></Link>
      </div>

      <div className="">
      <Link to='/about' className="p-2 text-black">About</Link>
      <Link to='/internship' className="p-2 text-black">Internship</Link>
      <Link to='/project' className="p-2 text-black">Live Projects</Link>
      <Link to='/product' className="p-2 text-black">Product</Link>
      </div>

    </div>
  );
}

      export default Navbar;