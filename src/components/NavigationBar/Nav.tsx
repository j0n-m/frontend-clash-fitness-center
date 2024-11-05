import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button, Dialog, DialogTrigger, Modal } from "react-aria-components";
import navLinks from "../../utils/navigationLinks";

function Nav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkResize = () => {
      const largeScreenSize = window.matchMedia("(min-width: 1024px)").matches;
      if (largeScreenSize && showMobileMenu) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener("resize", checkResize);
    return () => {
      window.removeEventListener("resize", checkResize);
    };
  }, [showMobileMenu]);

  return (
    <nav className="px-4 z-50 relative lg:px-8 py-2 bg-black-primary text-white-dim1">
      <ul className="flex justify-between overflow-hidden p-1 lg:p2">
        <li className="left">
          <Link to="/">
            <div className="logo text-white">
              <p className="text-2xl font-bold">Clash</p>
              <p className="mt-[-6px] text-xs text-center">Fitness Center</p>
            </div>
          </Link>
        </li>
        <li className="middle lg:flex items-center hidden">
          <div className="flex gap-5 text-lg">
            <Link key={0} href={"/"}>
              Home
            </Link>
            {navLinks.map((link) => {
              return (
                <Link key={link.id} href={link.href}>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </li>
        <li className="right flex flex-col justify-center rounded-lg">
          <div className="lg:hidden">
            <DialogTrigger>
              <Button
                className={({ isHovered, isPressed, isFocusVisible }) =>
                  `p-2 h-full rounded-lg ${isHovered || isPressed || isFocusVisible ? "text-white" : ""}`
                }
                onPress={() => setShowMobileMenu(!showMobileMenu)}
              >
                <p
                  className={`transition-all duration-[400ms] ${showMobileMenu ? "[transform:rotate(90deg)]" : ""}`}
                >
                  <XMarkIcon
                    className={`size-6 ${showMobileMenu ? "" : "hidden"}`}
                  />

                  <Bars3Icon
                    className={`size-6 ${showMobileMenu ? "hidden" : ""}`}
                  />
                </p>
              </Button>
              <Modal
                className={`mobile-menu-modal lg:hidden fixed inset-0 top-14 bg-black-primary border-none outline-none`}
                isDismissable={true}
                isOpen={showMobileMenu}
                onOpenChange={() => setShowMobileMenu(false)}
              >
                <Dialog className={`px-10 border-none outline-none`}>
                  {({ close }) => (
                    <div className="h-svh p-4">
                      <nav className="text-white-dim1 text-3xl font-bold">
                        <ul className="flex flex-col gap-5 text-center">
                          {navLinks.map((link) => (
                            <li key={link.id}>
                              <Button
                                className={
                                  "w-full hover:text-white active:text-white focus-visible:text-white transition-all duration-[400ms]"
                                }
                                onPress={() => {
                                  close();
                                  navigate({ to: link.href });
                                }}
                              >
                                {link.label}
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  )}
                </Dialog>
              </Modal>
            </DialogTrigger>
          </div>
          <div className="hidden lg:flex lg:items-center rounded-lg">
            <Link
              className={`hover:text-white-primary focus-visible:text-white-primary border-2 border-gray-primary py-1 px-4 rounded-lg hover:border-white-primary`}
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
