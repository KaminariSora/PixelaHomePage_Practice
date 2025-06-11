import './navBar.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const ToggleMenu = () => {
        setShowMenu(!showMenu);
        console.log('click')
    }
    return(
        <header className="header">
                <a href='/' className='logo'><img src='./Images/Pixela.png' alt='Pixela'></img></a>
                <nav className="nav container">
                    {/* NavMenu */}
                    <div className={`navMenu ${showMenu ? 'showMenu' : ''}`}>
                        <ul className="navList" type="none">
                            <li className="listItem"><Link to="/Home" className='quicksand navLink'>Home</Link></li>
                            <li className="listItem"><Link to="/Member" className='quicksand navLink'>Member</Link></li>
                            <li className="listItem"><Link to="/Song" className='quicksand navLink'>Song</Link></li>
                            <li className="listItem"><Link to="/Market" className='quicksand navLink'>Market</Link></li>
                            <li className="listItem"><Link to="/Company" className='quicksand navLink'>Company</Link></li>
                            <li className="listItem"><Link to="/Contact" className='quicksand navLink'>Contact</Link></li>
                        </ul>
                        <div className="navClose" onClick={ToggleMenu}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                </nav>
                <div className="nav_action">
                    <div className="navToggle" onClick={ToggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </header>
    )
}

export default Header