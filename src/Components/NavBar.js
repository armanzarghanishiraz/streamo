import './NavBar.css';
import logo from "../logo.svg";

const NavBar = () => {
    return (
        <div className="NavBar">
            <a className="nav-logo" href="/homepage">Streamo</a>
            <div className="nav-items">
                <a href="/signin"> Sign In </a>
                <a href="/signup"> Sign Up </a>
                <a href="/contactus"> Contact Us </a>
            </div>
        </div>
    )
}

export default NavBar;