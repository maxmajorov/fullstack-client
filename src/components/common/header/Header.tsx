import React from "react";
import socialLogo from "../../../assets/img/social-logo.png";
import classes from "./Header.module.css";

export const Header: React.FC = () => {
  const indicatorClassName = `${classes.indicator} ${
    true ? classes.online : classes.offline
  } `;

  return (
    <header className={classes.header}>
      <div className={classes.headerLogo}>
        <div>
          <img src={socialLogo} className={classes.logo} alt="logo" />
        </div>
        <span className={classes.title}>
          <b>
            <span style={{ color: "#228be6" }}>CHAT</span>
          </b>
          me
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={indicatorClassName} />
      </div>
    </header>
  );
};
