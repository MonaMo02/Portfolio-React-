import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";


export default function Header() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div className="navbar--img">
                <img src="./img/logo (1).png" alt=" Logoipsum " />
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : "a"} `} onClick={toggleNav}>
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
            </a>

            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active--content"
                        spy={true}
                        smooth = {true}
                        offset={-70}
                        duration={500}
                        to="Hero"
                        className="navbar--content">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active--content"
                        spy={true}
                        smooth = {true}
                        offset={-70}
                        duration={500}
                        to="AboutMe"
                        className="navbar--content">
                            About Me                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active--content"
                        spy={true}
                        smooth = {true}
                        offset={-70}
                        duration={500}
                        to="Services"
                        className="navbar--content">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active--content"
                        spy={true}
                        smooth = {true}
                        offset={-70}
                        duration={500}
                        to="Working"
                        className="navbar--content">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active--content"
                        spy={true}
                        smooth = {true}
                        offset={-70}
                        duration={500}
                        to="Portfolio"
                        className="navbar--content">
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </div>
            <Link onClick={closeMenu} activeClass="navbar--active--content"
                        spy={true}
                        smooth = {true}
                        offset={-70}
                        duration={500}
                        to="Subscribe"
                        className="btn btn-outline-primary">
            Contact Me
            </Link>
        </nav>
    );
}
