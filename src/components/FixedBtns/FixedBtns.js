import React from "react";
import "./FixedBtn.scss";
import icons from "../../assets/icons/icons.svg";

export default function FixedBtns({ mode, setMode, fixedNavbar }) {
  function toggleMode() {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("mode", newMode);
      return newMode;
    });
  }

  return (
    <div className="btns-fixed">
      {fixedNavbar && (
        <a href="#home" className="btn btn--fixed">
          <svg className="icon icon-arrow-up2">
            <use xlinkHref={`${icons}#icon-arrow-up2`}></use>
          </svg>
        </a>
      )}
      <button className="btn btn--fixed" onClick={toggleMode}>
        {mode === "light" ? (
          <svg className="icon icon-moon-fill">
            <use xlinkHref={`${icons}#icon-moon-fill`}></use>
          </svg>
        ) : (
          <svg className="icon icon-sun">
            <use xlinkHref={`${icons}#icon-sun`}></use>
          </svg>
        )}
      </button>
    </div>
  );
}
