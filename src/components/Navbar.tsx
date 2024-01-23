import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setnav(!nav);
  };

  interface navbar {
    title: string;
    path: string;
  }

  const linksData: navbar[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Product",
      path: "/product",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "About Us",
      path: "/about",
    },
  ];

  return (
    <div className="max-w-[72rem] mx-auto flex justify-between items-center py-8 lg:px-0 px-5">
      <div>
        <Link to="/" className="logo">
          Biccas
        </Link>
      </div>
      <nav className="flex justify-between items-center gap-32">
        <ul className="hidden md:flex justify-between items-center gap-8">
          {linksData.map((link) => {
            return (
              <li className="nav__List">
                <Link
                  to={link.path}
                  className={
                    location.pathname === link.path ? "text-appBlack" : ""
                  }
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden md:flex md:items-center gap-5">
          <button className="navLite__button">Login</button>
          <button className="nav__button">Sign Up</button>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          {nav ? (
            <Icon icon="lets-icons:close-round" className="text-2xl" />
          ) : (
            <Icon icon="ph:list-bold" className="text-2xl" />
          )}
        </div>
        {/* mobile */}
        <div
          className={`fixed top-0 w-[80%] h-full border-r pl-5 pt-5  bg-white ease-in-out duration-500 md:left-[-100%] ${
            nav ? "left-0" : "left-[-100%]"
          }`}
        >
          <ul>
            {linksData.map((link) => {
              return (
                <li className="nav__List">
                  <Link
                    to={link.path}
                    className={
                      location.pathname === link.path ? "text-appBlack" : ""
                    }
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
