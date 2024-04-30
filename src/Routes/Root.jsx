
import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import Footer from '../ExtraPage/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;