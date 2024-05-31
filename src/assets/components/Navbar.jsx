import logoImg from '../image/logo.png';
import './style/Navbar.css'

export default function Navbar(){
    return(
        <>
            <nav>
                <div className='navbar-content'>
                    <ul className='flex-navbar'>
                        <li><img src={logoImg}/></li>
                        <li>
                            Data Management
                        </li>
                        <li>
                            QR Generator
                        </li>
                    </ul>
                    <ul className='flex-userdropdwn'>
                        <button className='btn-userdropdwn'>
                            <span className="material-icons">account_circle</span>Username
                            <span className="material-icons">expand_more</span>
                        </button>
                        <div className="userdropdwn-content">
                            Logout
                        </div>
                    </ul>
                </div>   
            </nav>

        </>
    
    );

}