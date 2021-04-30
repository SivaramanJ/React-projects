
import React from "react";
import MenubarData from './MenubarData';
import { Link } from 'react-router-dom';

const Header = () => {

    return(
        <div className="headerCls">
           <p className="logo"> Etisalat Insurance </p>
           <nav className='nav-menu'>
                <ul className='nav-menu-items' >
                    
                    {MenubarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
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

