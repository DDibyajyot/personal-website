"use client";

import {
  Logo,
  Menu,
  ConnectMedia,
  MobileMenu,
} from "components";
import { useMediaQuery } from "utils";
import { useEffect, useState } from "react";

export function AppHeader() {
  const isMobile = useMediaQuery();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide header when scrolling down past 50px
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Show header when scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`pt-5 pb-5 sticky top-0 z-10 bg-transparent transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container-md">
        <div className="flex justify-between items-center">
          <Logo />
          {isMobile ? (
            <MobileMenu />
          ) : (
            <>
              <Menu />
              <div className="flex items-center gap-5">
                <ConnectMedia />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
