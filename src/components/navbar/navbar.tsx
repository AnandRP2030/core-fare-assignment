export function Navbar() {
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
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://corefares.com/?page_id=15">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Footer
            </a>
          </li>
        </ul>
      </div>
      <div className=" my-2 my-lg-0">
        <a className="navbar-brand" href="#">
          <img
            src="http://corefares.com/wp-content/uploads/2021/08/coreFares-logo-web-new.png"
            alt="logo"
            className="logo"
          />
        </a>
      </div>
    </nav>
  );
}
