import React from 'react'
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { darkTheme } from "../../../store/modules/darkThemeSlice";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BackButton = () => {
    const history = useHistory();
    const isDarkTheme = useSelector(darkTheme);
    const handleClick = () => {
      history.push(`/`);
    };
    const backButtonClassName = `back-button ${isDarkTheme ? 'back-button--darkTheme' : ''}`
    return (
        <button className={backButtonClassName} onClick={handleClick}>
        <FontAwesomeIcon icon={faArrowLeft}/> Back
      </button>
    )
}