import React, { useRef, useContext } from "react";
import useOnClickOutside from "./onClickOutside";
import { MenuContext } from "./NavState";
import HamburgerButton from "./HamburgerButton";
import { SideMenu } from "./SideMenu";

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <>
      <HamburgerButton />
      <SideMenu />
    </>
  );
};

export default MainMenu;
