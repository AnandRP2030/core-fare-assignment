import { useState } from "react";

export function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light  nav-style   ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ">
          <li className={`nav-item ${activeLink === "Home" && "active"}`}>
            <a
              className="nav-link"
              href="#"
              onClick={() => {
                handleClick("Home");
              }}
            >
              Home
            </a>
          </li>
          <li className={`nav-item ${activeLink === "Services" && "active"}`}>
            <a
              className="nav-link"
              href="http://corefares.com/?page_id=15"
              onClick={() => {
                handleClick("Services");
              }}
            >
              Services
            </a>
          </li>
          <li className={`nav-item ${activeLink === "About" && "active"}`}>
            <a
              className="nav-link"
              href="http://corefares.com/?page_id=13"
              onClick={() => {
                handleClick("About");
              }}
            >
              About
            </a>
          </li>
          <li className={`nav-item ${activeLink === "Contact" && "active"}`}>
            <a
              className="nav-link"
              href="#contact"
              onClick={() => {
                handleClick("Contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className=" my-2 my-lg-0">
        <a className="navbar-brand" href="#">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/22/11/48/mountain-1849091_1280.png"
            alt="logo"
            className="logo"
          />
        </a>
      </div>
    </nav>
  );
}
