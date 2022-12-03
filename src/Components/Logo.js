import './Logo.css';
import * as icons from '../assets/imgs/icons.js';

const Logo = () => {
    return (
        <img src={icons.streamo_logo} className='logo' alt="Logo here"/>
    )
};

export default Logo;