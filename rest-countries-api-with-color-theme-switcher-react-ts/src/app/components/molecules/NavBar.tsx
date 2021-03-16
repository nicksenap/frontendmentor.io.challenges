import React from "react";
import { useSelector } from "react-redux";
import { darkTheme } from "../../../store/modules/darkThemeSlice";
import { DarkThemeToggle } from "../atoms/darkThemeToggle/DarkThemeToggle";

export function Navbar() {
  const isDarkTheme = useSelector(darkTheme);
  const navClassName = `nav ${isDarkTheme ? "nav--darkTheme" : ""}`;
  return (
    <div className={navClassName}>
      <h2>Where in the world?</h2>
      <DarkThemeToggle />
    </div>
  );
}
