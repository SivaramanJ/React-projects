
import React from "react";
import MenubarData from './MenubarData';
import { Link } from 'react-router-dom';
import  UserIcon from "../../public/UserIcon.svg";

const Header = () => {

    return(
        <div className="headerCls">
           <p className="logo"> Travel Insurance </p>
           <nav className='nav-menu'>
                <ul className='nav-menu-items' >
                    
                    {MenubarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon && <img src={UserIcon} style={{marginRight: "10px"}}/>}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                    })}
                </ul>
        </nav>
            
        </div>
    )

}


export default Header;

