
import Footer from '../components/Footer';
import Header from '../components/Header';

import { Outlet } from 'react-router-dom';
import HeaderAndFooterWrapper from '../components/HeaderAndFooterWrapper';
 

const LandingPage =()=>{
    return (
        <>
       <HeaderAndFooterWrapper>

            <h1>Landing Page</h1>
            <Outlet />
       </HeaderAndFooterWrapper>
      
    </>
    )
}

export default LandingPage;