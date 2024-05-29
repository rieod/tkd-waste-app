import Navbar from './Navbar';

import DataManagement from './DataManagement';
import GenerateCode from './GenerateCode';
import Login from './Login';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function NavbarRouter(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                    <Route path="/DataManagement" element={<DataManagement />} />
                    <Route path="/GenerateCode" element={<GenerateCode />} />
                    <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
        
    );
}