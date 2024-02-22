import { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.jpg";

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);
    return(
        <>
            <div className={toggle ? "aside show-menu" : "aside"}>
                <a href='#home' className='nav_logo'>
                    <img src={Logo} alt='' className='logo'/>
                </a>

                <nav className='nav'>
                    <div className='nav_menu'>
                        <ul className='nav_list'>
                            <li className='nav_item'>
                                <a href='#home' className='nav_link'>
                                    <i className='icon-home'></i>
                                </a>
                            </li>
                            
                            <li className='nav_item'>
                                <a href='#about' className='nav_link'>
                                <i className='icon-user'></i>
                                </a>
                            </li>

                            <li className='nav_item'>
                                <a href='#resume' className='nav_link'>
                                <i className='icon-graduation'></i>
                                </a>
                            </li>

                            <li className='nav_item'>
                                <a href='#portfolio' className='nav_link'>
                                <i className='icon-layers'></i>
                                </a>
                            </li>

                            <li className='nav_item'>
                                <a href='#contact' className='nav_link'>
                                <i className='icon-bubbles'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className='nav_footer'>
                    <span className='copyright'>&copy; 2023</span>
                </div>
            </div>

            <div className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"} onClick={() => showMenu(!toggle)}>
                <i className="icon-menu"></i>
            </div>
        </>
    )
}

export default Sidebar;