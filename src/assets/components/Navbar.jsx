import logoImg from '../image/logo.png';
import './style/Navbar.css'

export default function Navbar(){
    return(
    <>
        <div className='navbar-content'>
            <ul className='flex-navbar'>
                <li><img src={logoImg}/></li>
                <li>Data Management</li>
                <li>QR Generator</li>
            </ul>
            <ul className='flex-userdropdwn'>
                <button className='btn-userdropdwn'>Username</button>
                <div className="userdropdwn-content">
                    <a href="#">Logout</a>
                </div>
            </ul>
        </div>   
    </>
   
    );

}