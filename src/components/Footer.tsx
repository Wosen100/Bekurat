//import '../styles/header.css'

import styles from 'styled-components';

const FooterWrapper = styles.footer`

position:fixed;
bottom:0;
width:100%;
background-color:#ccc;
`;

function Footer(){
    return(
        <FooterWrapper>
            @wosen 2022
        </FooterWrapper>
    )
}

export default Footer;