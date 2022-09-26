
import Footer from '../components/Footer';
import Header from '../components/Header';

import { Outlet } from 'react-router-dom';
 

const LandingPage =()=>{
    return (
        <>
        <Header />
            <h1>Landing Page</h1>
            <Outlet />
        <Footer />
    </>
    )
}

export default LandingPage;