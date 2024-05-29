import { Link, Outlet } from 'react-router-dom';

import logoImg from '../image/logo.png';
import './style/Navbar.css'

export default function Navbar(){
    return(
        <>
            <nav>
                <div className='navbar-content'>
                    <ul className='flex-navbar'>
                        <li><Link to='DataManagement'><img src={logoImg}/></Link></li>
                        <li>
                            <Link to='/DataManagement'>Data Management</Link>
                        </li>
                        <li>
                            <Link to='/GenerateCode'>QR Generator</Link>
                        </li>
                    </ul>
                    <ul className='flex-userdropdwn'>
                        <button className='btn-userdropdwn'>
                            <span className="material-icons">account_circle</span>Username
                            <span className="material-icons">expand_more</span>
                        </button>
                        <div className="userdropdwn-content">
                            <Link to='/Login'>Logout</Link>
                        </div>
                    </ul>
                </div>   
            </nav>

            <Outlet />
        </>
    
    );

}