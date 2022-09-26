import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function HeaderAndFooterWrapper(props:any) {
    return <div style={{padding:'0px 20px'}}>
        <Header/>
{props.children}
<Footer/>
</div>;
}
