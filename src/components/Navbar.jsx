import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/">
        <h1>Cordium dApps</h1>
      </Link>
      <ul className="hidden md:flex">
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="/news">Dapp News</Link>
        </li>
        <li>
          <Link to="/explore">Explore Dapps</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <FaTimes size={20} style={{ color: "#fff", cursor: "pointer" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff", cursor: "pointer" }} />
        )}
      </div>

      <div
        className={
          nav
            ? "md:hidden w-full h-screen left-0 top-0 absolute flex flex-col justify-center items-center text-center bg-black -z-10 ease-in-out duration-500"
            : "md:hidden absolute left-[-100%]"
        }
      >
        <ul>
          <li className="py-4">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="py-4">
            <Link to="/news" className="link">
              Dapp News
            </Link>
          </li>
          <li className="py-4">
            <Link to="/explore" className="link">
            Explore Dapps
            </Link>
          </li>
          <li className="py-4">
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
