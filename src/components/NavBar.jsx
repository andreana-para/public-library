import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';
import libraryLogo from '../assets/libraryLogo.png'

const NavBar = ({}) => {

    return (
        <nav className = {styles.navBar}>
            <img className="logo" src={libraryLogo}/>
            <div className = {styles.links}>
                {/* <a href="#">Home</a> */}
                <Link to="/">Home</Link> 
                    
                {/* <a href="#">About</a> */}
                <Link to="/about">About</Link>

                {/* <a href="#">Profiles</a> */}
                <Link to="/profiles">Profiles</Link>
            </div>
        </nav>
    )
}

export default NavBar;