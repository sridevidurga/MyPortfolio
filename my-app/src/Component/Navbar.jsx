import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-purple-400 p-1 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-3xl font-bold text-yellow-400 hover:text-yellow-500 transition">MyPortfolio</h1>
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`md:flex md:space-x-6 absolute md:static bg-purple-400  text-white w-full md:w-auto left-0 top-16 md:top-0 transition-all ${open ? 'block' : 'hidden'}`}>
        <li className="p-4 hover:text-yellow-400"><Link to="/MyPortfolio/">Home</Link></li>
        <li className="p-4 hover:text-yellow-400"><Link to="/MyPortfolio/projects">Projects</Link></li>
        <li className="p-4 hover:text-yellow-400"><Link to="/about">About</Link></li>
        <li className="p-4 hover:text-yellow-400"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
