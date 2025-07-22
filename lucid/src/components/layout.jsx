import { useState } from "react";
import logo from "../assets/lucidLogo.png";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion,AnimatePresence } from "framer-motion";
import "./css/style.css";
import {  FaTimes, FaBars } from "react-icons/fa";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  // Navigation items data
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About" },
    { path: "/infrastructure", label: "Infrastructure" },
    {
      label: "Products",
      subItems: [
        { path: "/automotive-grease", label: "Automotive Grease" },
        { path: "/automotive-engine-oil", label: "Engine Oil" },
        { path: "/gear-oil", label: "Gear Oil" },
        { path: "/hydraulic-oil", label: "Hydraulic oil" },
      ],
    },
    { path: "/contact", label: "Contact us" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  // Check if current path matches or starts with the nav item path
  const isActive = (path) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  // Contact Button Component
  const ContactButton = ({ mobile = false }) => (
    <motion.a
      href="tel:+917402623998"
      className={`flex items-center justify-center gap-2 px-4 py-2 bg-white text-[#034a9a] font-medium rounded-full ${
        mobile ? "mt-4 mx-4" : "ml-4"
      }`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.span
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
      >
        <FaPhoneAlt />
      </motion.span>
      <span>+91 74026 23998</span>
    </motion.a>
  );

  return (
    <header className="bg-[#034a9a] text-white sticky top-0 z-50 shadow-md">
       <nav className=" mx-auto px-4 sm:px-6 lg:px-8 py-2 pt-4 overflow-visible h-20">
        <div className="flex items-start justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center focus:outline-none   rounded-full bg-[#034a9a] p-2"
            aria-label="Home"
            onClick={closeAllDropdowns}
          >
            <img
              src={logo}
              alt="Lucid Petro Chemical Company Logo"
             className="size-18 lg:size-24 xl:size-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) =>
              item.subItems ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                >
                  <button
                    className={`flex items-center px-4 py-2 text-lg font-medium text-white hover:text-[#7fbadf] transition-colors focus:outline-none  rounded focus:border-none ${
                      isActive("/products") ? "text-[#3eb0f7]" : ""
                    }`}
                    onClick={() => handleDropdownToggle(item.label)}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                    aria-controls={`dropdown-${item.label}`}
                  >
                    {item.label}
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    id={`dropdown-${item.label}`}
                    className={`absolute left-0 top-[3.2rem] mt-2 w-56 origin-top-left rounded-md bg-[#034a9a] shadow-lg   transition-all duration-200 ${
                      openDropdown === item.label
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={`menu-button-${item.label}`}
                    onMouseLeave={closeAllDropdowns}
                  >
                    <div className="py-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block px-4 py-2 text-white hover:bg-[#587aa1] transition-colors focus:bg-[#587aa1] focus:outline-none ${
                            isActive(subItem.path) ? "bg-[#587aa1]" : ""
                          }`}
                          role="menuitem"
                          onClick={closeAllDropdowns}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-lg font-medium text-white hover:text-[#84b5d3] transition-colors group focus:outline-none ${
                    isActive(item.path) ? "text-[#84b5d3]" : ""
                  }`}
                  onClick={closeAllDropdowns}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#67b0ff] transition-all duration-300 ${
                      isActive(item.path) ? "w-3/4" : "w-0 group-hover:w-3/4"
                    }`}
                  ></span>
                </Link>
              )
            )}

            {/* Contact Button with Animation */}
            <motion.div
              className="relative inline-block"
              whileHover="hover"
              whileTap="tap"
            >
              {/* Glow backdrop (only visible on hover) */}
              <motion.div
                className="absolute inset-0 rounded-full blur-md"
                variants={{
                  hover: {
                    background:
                      "radial-gradient(circle, rgba(0,168,255,0.4) 0%, rgba(0,168,255,0) 70%)",
                    opacity: 1,
                    scale: 1.5,
                  },
                  tap: {
                    scale: 1.3,
                  },
                }}
                initial={{ opacity: 0 }}
              />

              {/* Main button */}
              <motion.a
                href="tel:+917402623998"
                className="relative lg:ml-30 md:ml-0 ml-20 px-4 py-2 bg-[#fbfbfb] text-[#034a9a] font-medium rounded-full
                  flex gap-4 items-center justify-center overflow-hidden z-10"
                variants={{
                  hover: {
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 0 20px rgba(0,168,255,0.7)",
                    textShadow: "0 0 8px rgba(0,168,255,0.5)",
                    y: -2,
                  },
                  tap: {
                    scale: 0.98,
                  },
                }}
              >
                {/* Floating particles (appear on hover) */}
                <motion.span
                  className="absolute inset-0 overflow-hidden"
                  initial={{ opacity: 0 }}
                  variants={{
                    hover: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute bg-white rounded-full"
                      style={{
                        width: Math.random() * 4 + 2 + "px",
                        height: Math.random() * 4 + 2 + "px",
                        left: Math.random() * 100 + "%",
                        top: Math.random() * 100 + "%",
                      }}
                      variants={{
                        hover: {
                          y: [0, -20],
                          opacity: [1, 0],
                          transition: {
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                          },
                        },
                      }}
                    />
                  ))}
                </motion.span>

                {/* Animated phone icon */}
                <motion.span
                  variants={{
                    hover: {
                      rotate: [0, 10, -10, 0],
                      transition: {
                        duration: 1.2,
                        repeat: Infinity,
                      },
                    },
                    tap: {
                      scale: 0.9,
                    },
                  }}
                >
                  <FaPhoneAlt className="text-xl" />
                </motion.span>

                {/* Phone number with glow */}
                <motion.span
                  variants={{
                    hover: {
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 500,
                      },
                    },
                  }}
                >
                  +91 74026 23998
                </motion.span>

                {/* Inner glow pulse */}
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  initial={{ opacity: 0 }}
                  variants={{
                    hover: {
                      opacity: [0, 0.3, 0],
                      boxShadow: "inset 0 0 15px rgba(0,168,255,0.5)",
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                      },
                    },
                  }}
                />
              </motion.a>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none relative z-[999]"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween" }}
              className="md:hidden fixed inset-0 bg-[#034a9a] z-40 pt-16 overflow-y-auto"
              aria-hidden={!isMenuOpen}
            >
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item) =>
                  item.subItems ? (
                    <div key={item.label} className="py-1">
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-white"
                        aria-expanded={openDropdown === item.label}
                      >
                        {item.label}
                        <svg
                          className={`h-4 w-4 transition-transform ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-6 space-y-1">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className={`block py-2 px-4 text-base rounded hover:bg-blue-700 ${
                                    isActive(subItem.path) ? "bg-blue-700" : ""
                                  }`}
                                  onClick={closeMenu}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-3 text-base font-medium rounded hover:bg-blue-700 ${
                        isActive(item.path) ? "bg-blue-700" : ""
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <ContactButton mobile />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal justify-between  p-[4rem] px-[2rem] lg:px-[10rem] bg-[#034a9a] text-[#84b5d3]">
        <div className="flex flex-col items-start justify-center ">
          <div className="flex items-center justify-between  gap-4">
            <img
              src={logo}
              alt="Lucid Petro Chemical Company Logo"
              className="size-22   "
            />
            <h1 className=" font-semibold text-white text-xl">
              Lucid Petro Chemical
            </h1>
          </div>
          <div className="flex flex-col items-start mt-6 gap-3 text-white text-base">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-xl" />
              <a href="tel:+917402623998" className="hover:underline">
                +91 74026 23998
              </a>
            </p>

            <p className="flex items-center gap-2">
              <FaEnvelope className="text-xl" />
              <a
                href="mailto:lucidpetrochemical@gmail.com"
                className="hover:underline"
              >
                lucidpetrochemical@gmail.com
              </a>
            </p>

            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-xl mt-1" />
              Kottathur, Thuraiyur, Tiruchirappalli-621004
            </p>
          </div>
        </div>
        <nav className="flex flex-col justify-center space-x-4 text-lg">
          <h3 className="font-semibold text-xl text-white">Products</h3>
          <Link
            className="hover:text-[#84b5d3] text-white text-lg"
            to={"/Automotive-grease"}
          >
            Automotive grease
          </Link>
          <Link
            className="hover:text-[#84b5d3] text-white text-lg"
            to={"/automotive-engine-oil"}
          >
            Engine Oil
          </Link>
          <Link
            className="hover:text-[#84b5d3] text-white text-lg"
            to={"/gear-oil"}
          >
            Gear Oil
          </Link>
          <Link
            className="hover:text-[#84b5d3] text-white text-lg"
            to={"/hydraulic-oil"}
          >
           Hydralic Oil
          </Link>
          
        </nav>
        <nav className="flex flex-col justify-center space-x-4 text-lg">
          <h3 className="font-semibold text-xl text-white">Quick Links</h3>
          <Link className="hover:text-[#84b5d3] text-white text-lg" to={"/"}>
            Home
          </Link>
          <Link
            className="hover:text-[#84b5d3] text-white text-lg"
            to={"/about-us"}
          >
            About us
          </Link>
          
          <Link
            className="hover:text-[#84b5d3] text-white text-lg"
            to={"/infrastructure"}
          >
            Infrastructure
          </Link>
          <Link
            className="hover:text-[#84b5d3] text-white text-lg"
            to={"/contact"}
          >
            Contact us
          </Link>
        </nav>
      </footer>
      <div className="bg-[#1482aa] text-[#ffffff] py-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Lucid Industries Ltd. All rights
          reserved. Developed by{" "}
          <a
            href="https://www.dmedia.in/"
            target="_blank"
            className="cursor-pointer"
          >
            Dmedia
          </a>
        </p>
      </div>
    </>
  );
};

import { useLocation } from "react-router-dom";

export function AppBreadcrumbs() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const hideBreadcrumbsRoutes = ["/", "/products"];
  if (hideBreadcrumbsRoutes.includes(location.pathname)) {
    return null;
  }
  const breadcrumbItems = pathParts.map((part, index) => {
    const path = `/${pathParts.slice(0, index + 1).join("/")}`;
    const isLast = index === pathParts.length - 1;

    return (
      <li key={part}>
        {isLast ? (
          <span className="text-white font-bold">
            {part.replace(/\b\w/g, (char) => char.toUpperCase())}
          </span>
        ) : (
          <Link to={path} className="text-white font-bold">
            {part.replace(/\b\w/g, (char) => char.toUpperCase())}
          </Link>
        )}
      </li>
    );
  });

  return (
    <div className="text-sm breadcrumbs py-5">
      <ul>
        <li>
          <Link to="/" className="text-white  font-bold ">
            Home
          </Link>
        </li>
        {breadcrumbItems}
      </ul>
    </div>
  );
}

import { useEffect } from "react";
// import { motion } from "framer-motion";

export const LucidLoader = ({ nav, duration = 3000 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
    }, 30);

    return () => clearInterval(interval);
  }, [nav, duration]);

  if (progress >= 100) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#034a9a]"
      role="status"
      aria-label="Loading"
    >
      {/* Animated Branding */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="text-4xl font-bold text-white">
          <span className="text-[#84b5d3]">LUCID</span> OILS & Grease
        </h1>
        <p className="text-white/80 mt-2">Lucidi Petro Chemical</p>
      </motion.div>

      {/* Oil Droplets Animation */}
      <div className="relative h-32 w-32 mb-8">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#84b5d3] rounded-full"
            style={{
              width: `${10 + i * 5}px`,
              height: `${10 + i * 5}px`,
              left: `${i * 25}px`,
              bottom: 0,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mb-2">
        <motion.div
          className="h-full bg-[#84b5d3] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

      {/* Percentage Indicator */}
      <span className="text-white text-sm font-medium">
        {Math.floor(progress)}%
      </span>

      {/* Loading Message */}
      <p className="text-white/80 mt-4 text-sm">
        Loading {nav || "content"}...
      </p>
    </div>
  );
};

export const Banner = ({ title, description }) => {
  let squares = [];

  for (let i = 0; i < 20; i++) {
    squares.push(i);
  }

  const generateRandomNum = ({ min, max }) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div className="intro relative h-[65vh] min-h-[400px] overflow-hidden">
      {/* Breadcrumbs positioned absolutely */}

      {/* Content */}
      <div className="quote">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Animated background */}
      <div className="squares-wrapper bg-gradient-to-r from-blue-800 to-blue-600">
        <ul className="squares">
          {squares.map((el, i) => {
            const randomDimensions = Math.floor(
              Math.random() * (150 - 15 + 1) + 15
            );

            return (
              <li
                key={i}
                style={{
                  left: `${generateRandomNum({ min: 0, max: 90 })}%`,
                  width: `${randomDimensions}px`,
                  height: `${randomDimensions}px`,
                  animationDelay: `${
                    i % 2 ? generateRandomNum({ min: 0, max: 20 }) : 0
                  }s`,
                  animationDuration: `${generateRandomNum({
                    min: 10,
                    max: 50,
                  })}s`,
                  background: "rgba(255, 255, 255, 0.15)",
                }}
              />
            );
          })}
        </ul>
      </div>

      {/* Overlay */}
      <div className="image-overlay bg-blue-900/40" />
    </div>
  );
};
