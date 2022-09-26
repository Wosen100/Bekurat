//import '../styles/header.css'

import styles from 'styled-components';

const FooterWrapper = styles.footer`

position:absolute;
bottom:0;
width:100%;
padding:10px;
background-color:#ccc;
`;

function Footer(){
    return(
        <FooterWrapper>
            This is footer
        </FooterWrapper>
    )
}

export default Footer;