import React from "react";

const Header = ({ children }) => {
  return (
    <nav className="nav-wrapper light-blue darken-3">
      <a href="#!" className="brand-logo center">
        {children}
      </a>
    </nav>
  );
};

export default Header;
