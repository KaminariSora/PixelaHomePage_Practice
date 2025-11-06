import { Link } from "react-router-dom";
import './profileBar.css'
import UserIcons from "../Components/icons/userIcon";
import SearchIcon from "../Components/icons/searchIcon";
import ShoppingBagIcon from "../Components/icons/shoppingBagIcon";

const ProfileBar = () => {
    return (
        <div className="profileBar">
            <div className="profileBar-container">
                <ul className="profile-NavList" id="navList" type="none">
                    <li className=""><Link to="#" className='quicksand navLink'>All product</Link></li>
                    <li className=""><Link to="#" className='quicksand navLink'>All collection</Link></li>
                    <li className=""><Link to="#" className='quicksand navLink'>Talents</Link></li>
                </ul>
                <ul className="profile-NavList" id="profileBar" type="none">
                    <li className=""><Link to="#" className='quicksand navLink'><SearchIcon /></Link></li>
                    <li className=""><Link to="/Login" className='quicksand navLink'><UserIcons /></Link></li>
                    <li className=""><Link to="#" className='quicksand navLink'><ShoppingBagIcon /></Link></li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileBar