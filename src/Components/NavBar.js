import './NavBar.css';
import logo from "../logo.svg";

const NavBar = () => {
    const path = window.location.pathname
    return (
        <div className="NavBar">
            <a className="nav-logo" href="/">Streamo</a>
            <div className="nav-items">
                <a href="/sign-in"> Sign In </a>
                <a href="/register"> Register </a>
            </div>
        </div>
    )
}

export default NavBar;