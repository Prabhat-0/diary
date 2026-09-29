import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";

const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOGVixjsrxWKyc8kjmk8Kf_7mz9UgHjJmWZfT9o9Pkg&s=10";

const navItems = [
  { value: "Home", path: "/" },
  { value: "Services", path: "/services" },
  { value: "Testimonials", path: "/testimonials" },
  { value: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu after navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const desktopLink = ({ isActive }) =>
    `rounded-3xl border-2 border-transparent px-6 py-3 text-xl font-medium transition-all duration-300 ${
      isActive ? "text-amber-400" : ""
    } ${
      scrolled
        ? "hover:border-amber-400 hover:text-amber-500"
        : "hover:border-white hover:bg-white/10 hover:text-white hover:backdrop-blur-2xl"
    }`;

  const mobileLink = ({ isActive }) =>
    `block rounded-xl px-4 py-3 text-lg font-medium transition-colors duration-200 ${
      isActive ? "text-amber-400" : ""
    } ${
      scrolled
        ? "hover:bg-amber-50 hover:text-amber-600"
        : "hover:bg-white/10 hover:text-amber-300"
    }`;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 text-black shadow-md backdrop-blur-lg"
          : `text-white ${
              open
                ? "max-lg:bg-white/10 max-lg:backdrop-blur-2xl"
                : "bg-transparent"
            }`
      }`}
    >
      {/* Top bar */}
      <div className="flex h-18 items-center justify-between px-6 md:px-12 ">
        <NavLink to="/" className="h-12 w-16 shrink-0 rounded-3xl overflow-hidden">
          <img
            src={logo}
            alt="Travel Diary"
            className="h-full w-full object-contain "
          />
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden items-center gap-4 lg:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={desktopLink}
              >
                {item.value}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger (below lg only) */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-2xl lg:hidden"
        >
          {open ? <FaX /> : <FaBars />}
        </button>
      </div>

      {/* Mobile / medium menu */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 px-6 pb-6 pt-2 md:px-12">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={mobileLink}
                >
                  {item.value}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;