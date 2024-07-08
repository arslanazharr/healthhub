/* eslint-disable no-unused-vars */
import { useState, Fragment } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Groups2Icon from "@mui/icons-material/Groups2";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { NavLink } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useScroll } from "../context/scrollContext"; // Import ScrollProvider

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const navStyle = ({ isActive }) => {
    return {
      color: isActive ? "#37C2CC" : "#ffffffff",
      background: isActive ? "#f4f6f9" : "transparent",
      borderRadius: isActive ? "6px" : "none",
    };
  };
  const navStyle2 = ({ isActive }) => {
    return {
      color: isActive ? "#37C2CC" : "#ffffffff",
      background: isActive ? "#f4f6f9" : "transparent",
      borderRadius: isActive ? "6px" : "none",
    };
  };

  const handleNavOpen = () => {
    setOpenNav(true);
  };

  const handleCloseNav = () => {
    setOpenNav(false);
  };

  const scrollPositon = useScroll();

  console.log(scrollPositon);

  return (
    <>
      <header
        className={`text-4xl lg:px-[10vh] px-[3vh] w-full flex flex-row items-center justify-between h-[7vh] bg-main z-[9999] ${
          scrollPositon > 70 ? "fixed top-0" : "relative"
        }`}
      >
        <div className="lg:hidden">
          <MenuIcon
            onClick={handleNavOpen}
            className="!text-3xl !p-0 !m-0 text-white"
          />
        </div>

        <div className="flex items-center justify-between sm:py-0 py-3">
          <NavLink to="/home">
            <img src={logo} alt="Logo" className="w-[120px]" />
          </NavLink>
        </div>

        <ul className="lg:flex flex-row items-center justify-end hidden gap-4">
          <li>
            <NavLink
              className="flex items-center"
              to="/home"
              style={navStyle2}
              onClick={handleCloseNav}
            >
              <div className="flex !items-center gap-2 px-2 justify-start">
                <HomeIcon className="!p-0 !m-0 !text-[20px]" />
                <Typography className=" !text-[16px] !p-0 !m-0 ">
                  Home
                </Typography>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center"
              to="/about"
              style={navStyle2}
              onClick={handleCloseNav}
            >
              <div className="flex !items-center gap-2 px-2 justify-start">
                <Groups2Icon className="!p-0 !m-0 !text-[20px]" />
                <Typography className="!text-[16px] !p-0 !m-0">
                  About
                </Typography>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center"
              to="/services"
              style={navStyle2}
              onClick={handleCloseNav}
            >
              <div className="flex !items-center gap-2 px-2 justify-start">
                <MedicalServicesIcon className="!p-0 !m-0 !text-[20px]" />
                <Typography className=" !text-[16px] !p-0 !m-0">
                  Services
                </Typography>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink
              className="flex items-center"
              to="/contact"
              style={navStyle2}
              onClick={handleCloseNav}
            >
              <div className="flex !items-center gap-2 px-2 justify-start">
                <ContactPageIcon className="!p-0 !m-0 !text-[20px]" />
                <Typography className=" !text-[16px] !p-0 !m-0">
                  Contact
                </Typography>
              </div>
            </NavLink>
          </li>
        </ul>
      </header>

      <Transition.Root show={openNav} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[9999999999999] lg:hidden"
          onClose={handleCloseNav}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 z-[99999] flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <div
                  className="absolute left-full top-0 flex w-16 justify-center pt-5"
                  onClick={handleCloseNav}
                >
                  <CloseIcon color="primary" />
                </div>
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-main p-[4vh] ring-1 ring-white/10">
                  <nav className="flex flex-1 flex-col">
                    <NavLink
                      className="flex items-center py-3"
                      to="/home"
                      style={navStyle}
                      onClick={handleCloseNav}
                    >
                      <div className="w-full flex justify-center">
                        <div className="flex !items-center gap-3 justify-start !w-[110px]">
                          <HomeIcon className="!p-0 !m-0" />
                          <Typography className="!p-0 !m-0 !text-[18px]">
                            Home
                          </Typography>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink
                      className="flex items-center py-3"
                      to="/about"
                      style={navStyle}
                      onClick={handleCloseNav}
                    >
                      <div className="w-full flex justify-center">
                        <div className="flex !items-center gap-3 justify-start !w-[110px]">
                          <Groups2Icon className="!p-0 !m-0" />
                          <Typography className="!p-0 !m-0 !text-[18px]">
                            About
                          </Typography>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink
                      className="flex items-center py-3"
                      to="/services"
                      style={navStyle}
                      onClick={handleCloseNav}
                    >
                      <div className="w-full flex justify-center">
                        <div className="flex !items-center gap-3 justify-start !w-[110px]">
                          <MedicalServicesIcon className="!p-0 !m-0" />
                          <Typography className="!p-0 !m-0 !text-[18px]">
                            Services
                          </Typography>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink
                      className="flex items-center py-3"
                      to="/contact"
                      style={navStyle}
                      onClick={handleCloseNav}
                    >
                      <div className="w-full flex justify-center">
                        <div className="flex !items-center gap-3 justify-start !w-[110px]">
                          <ContactPageIcon className="!p-0 !m-0" />
                          <Typography className="!p-0 !m-0 !text-[18px]">
                            Contact
                          </Typography>
                        </div>
                      </div>
                    </NavLink>
                  </nav>
                  <div className="flex items-center justify-between px-14">
                    <NavLink to="/home" onClick={handleCloseNav}>
                      <img src={logo} alt="Logo" />
                    </NavLink>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Navbar;
