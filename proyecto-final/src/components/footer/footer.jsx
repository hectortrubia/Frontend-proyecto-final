
import React from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import "./footerstyle.scss"


function Footer() {
    const [theme, updateTheme, changeTheme] = useContext(themeContext)
    const [t, i18n] = useTranslation("global");

    return (
        <React.Fragment>
         <Navbar collapseOnSelect expand="md" bg={theme.secondary} style={{ height: "50px" }} className="generalcontainer"  variant="dark">
                
         <p className="footer ">Footer</p>
                  
             
            </Navbar>
        </React.Fragment>
    )
}

export default Footer;