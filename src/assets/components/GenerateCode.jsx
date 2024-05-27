import Navbar from './Navbar'
import GenerateForm from './GenerateForm';
import GenerateImage from './GenerateImage';

import './style/GenerateCode.css';
import ImageBackground from '../image/barcode-illustrate.png';

export default function GenerateCode(){
    return(
        <>
            <Navbar />
            <img src={ImageBackground} className='image-background'></img>
            <div className='generatecode-card'>
                <GenerateForm />
                <GenerateImage />
            </div>

        </>
        
    );
}