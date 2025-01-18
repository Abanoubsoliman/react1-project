import { Link, NavLink } from "react-router-dom";


export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg text-white fixed-top " style={{background: "#2C3E50", color: "white"}}> 
      <div className="container">
        <Link className="navbar-brand text-white fw-bolder" to="/">
          Start Framework
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink className="nav-link  text-white fw-bolder " aria-current="page" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink   className="nav-link text-white fw-bolder " to="/portfolio">
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fw-bolder" to="/contact">
                 CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 