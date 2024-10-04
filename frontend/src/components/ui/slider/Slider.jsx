import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { BiLogIn, BiRegistered, BiSolidContact, BiUser } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./Slider.css";
import SidebarMenu from "./SliderMenuItem";
import Logo from "../../../assets/logo.png";

const routes = [
  { path: "/", name: "Home", icon: <FaHome /> },
  { path: "/about-us", name: "About Us", icon: <FaUser /> },
  { path: "/contact-us", name: "Contact Us", icon: <BiSolidContact /> },
];

const profileRoutes = [
  { path: "/login", name: "Login", icon: <BiLogIn /> },
  { path: "/signup", name: "Sign Up", icon: <BiRegistered /> },
  { path: "/profile", name: "Profile", icon: <BiUser /> },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: { duration: 0.5 },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: { duration: 0.5 },
    },
  };

  const logoAnimation = {
    hidden: { scale: 0, opacity: 0, transition: { duration: 0.2 } },
    show: { scale: 1, opacity: 1, transition: { duration: 0.2 } },
  };

  return (
    <div className="main-container ">
      <motion.div
        animate={{
          width: isOpen ? "200px" : "45px",
          transition: { duration: 0.5, type: "spring", damping: 10 },
        }}
        className={`sidebar h-full flex flex-col`}
        onMouseEnter={toggle}
        onMouseLeave={toggle}
      >
        <div className="top_section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={logoAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
                <img src={Logo} className="w-[130px]" alt="Logo" />
              </motion.h1>
            )}
          </AnimatePresence>

          <div className="bars">
            <FaBars />
          </div>
        </div>

        <div className="h-[80vh] flex flex-col justify-between">
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    key={index}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>

          <section className="routes">
            {profileRoutes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    key={index}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </div>
      </motion.div>

      <main>{children}</main>
    </div>
  );
};

export default SideBar;
