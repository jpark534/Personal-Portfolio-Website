import { useState, useEffect} from "react";
import {Link} from "react-scroll"

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive)

  };
  const closemenu = () => {
    setNavActive(false)
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closemenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window,removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if(window.innerWidth <= 1200) {
      closemenu;
    }
  }, []);

  return( 
    <nav className={`navbar ${navActive ? "active": ""}`}>
      <div>
        <img src="./logo.png" alt="Julia Park" />
      </div>
      <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick = {toggleNav}>
        <span className="nav__hamburger__line">
        </span>
        <span className="nav__hamburger__line">
        </span>
        <span className="nav__hamburger__line">
        </span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link onClick={closemenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="heroSection"
            className="navbar--content"
            >
              Home
              </Link>
          </li>
          <li>
            <Link onClick={closemenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="mySkills"
            className="navbar--content"
            >
              My Skills
              </Link>
          </li>
          <li>
            <Link onClick={closemenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="AboutMe"
            className="navbar--content"
            >
              About Me
              </Link>
          </li>
          <li>
            <Link onClick={closemenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="MyPortfolio"
            className="navbar--content"
            >
              Portfolio
              </Link>
          </li>
          <li>
            <Link
              onClick={closemenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="experience"
              className="navbar--content"
            >
              Experiences
            </Link>
          </li>
          
          
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;