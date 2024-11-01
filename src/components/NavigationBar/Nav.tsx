import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "react-aria-components";

function Nav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="px-3 bg-black-primary text-white-dim1">
      <ul className="flex justify-between overflow-hidden p-1 lg:p2">
        <li className="left">
          <Link to="/">
            <div className="logo text-white-primary">
              <p className="text-2xl font-bold">Clash</p>
              <p className="-mt-2 text-xs text-center">Fitness Center</p>
            </div>
          </Link>
        </li>
        <li className="middle lg:flex items-center hidden">
          <div className="flex gap-5">
            <Link
              className={`hover:text-white-primary focus-visible:text-white-primary`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`hover:text-white-primary focus-visible:text-white-primary`}
              to="/"
            >
              About
            </Link>
            <Link
              className={`hover:text-white-primary focus-visible:text-white-primary`}
              to="/"
            >
              Gallary
            </Link>
            <Link
              className={`hover:text-white-primary focus-visible:text-white-primary`}
              to="/"
            >
              Schedule
            </Link>
            <Link
              className={`hover:text-white-primary focus-visible:text-white-primary`}
              to="/"
            >
              Pricing
            </Link>
            <Link
              className={`hover:text-white-primary focus-visible:text-white-primary`}
              to="/"
            >
              Classes
            </Link>
            <Link
              className={`hover:text-white-primary focus-visible:text-white-primary`}
              to="/"
            >
              Contact Us
            </Link>
          </div>
        </li>
        <li className="right flex flex-col justify-center pr-1">
          <div className="lg:hidden">
            <Button
              className={({ isHovered }) =>
                `p-2 h-full rounded-lg ${isHovered ? "text-white-primary" : ""}`
              }
              onPress={() => setShowMobileMenu(!showMobileMenu)}
            >
              <p
                className={`transition-all duration-500 ${showMobileMenu ? "[transform:rotate(90deg)]" : ""}`}
              >
                {showMobileMenu ? (
                  <XMarkIcon
                    className={`size-6 ${showMobileMenu ? "" : "hidden"}`}
                  />
                ) : (
                  <Bars3Icon
                    className={`size-6 ${showMobileMenu ? "hidden" : ""}`}
                  />
                )}
              </p>
            </Button>
          </div>
          <div className="hidden lg:flex lg:items-center">
            <Link
              className={`hover:text-white-primary focus-visible:text-white-primary outline outline-white-dim1 py-1 px-3 rounded-full hover:outline-white-primary`}
            >
              Join a class
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
