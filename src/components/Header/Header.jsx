import React from "react";
import './Header.css'
import HeaderBanner from "./HeaderBanner";
import HeaderNavigation from "./HeaderNavigation";

const Header = (props) => {
    return(
        <>
        <HeaderBanner/>
        <HeaderNavigation findMode={props.findMode}/>
        </>
    )
}

export default Header