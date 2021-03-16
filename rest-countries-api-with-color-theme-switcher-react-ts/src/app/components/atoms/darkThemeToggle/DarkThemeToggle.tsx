import React from "react";
import {
  toggleDarkTheme,
  darkTheme,
} from "../../../../store/modules/darkThemeSlice";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as fas_faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as far_faMoon } from "@fortawesome/free-regular-svg-icons";

export function DarkThemeToggle() {
  const isDarkTheme = useSelector(darkTheme);
  const dispatch = useDispatch();
  const icon = isDarkTheme ? fas_faMoon : far_faMoon;
  const className = `darkThemeToggle ${
    isDarkTheme ? "darkThemeToggle__darkTheme" : ""
  }`;
  const toggle = () => {
    dispatch(toggleDarkTheme());
  };
  return (
    <div>
      <span className={className} onClick={toggle}>
        <FontAwesomeIcon icon={icon} />
        <p>Dark Mode</p>
      </span>
    </div>
  );
}
