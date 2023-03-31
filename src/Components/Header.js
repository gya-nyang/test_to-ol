import React from 'react';

const stylesLogo = {
    width:'100px',
    margin:'0 auto 30px'
}

const stylesH2 = {
    fontWeight:'700',
    fontSize:'32px',
    textAlign:'center',
    margin:'0'
}

const stylesP = {
    textAlign:'center',
    margin:'10px 0 0'
}

function Header() {
    return (
        <>
            <header>
                <h1 style={stylesLogo}>
                    <img src={`${process.env.PUBLIC_URL}/images/tool_logo.webp`} alt="로고이미지"/>
                </h1>
                <h2 style={stylesH2}>
                    Product Edit
                </h2>
                <p style={stylesP}>
                    Product add, print, delete
                </p>
            </header>
        </>
    );
}

export default Header;