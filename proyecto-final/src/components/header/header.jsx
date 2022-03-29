

import './headerstyle.scss';
import React from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'







function Header() {
    const [theme, updateTheme, changeTheme, logName, setLogName] = useContext(themeContext)

    const [t, i18n] = useTranslation("global");

    return (
        <React.Fragment>

            <Navbar collapseOnSelect expand="md" bg={theme.secondary} style={{ height: "60px" }} className="textnav" sticky="top" variant="dark">
                <Container className="p-0 m-0">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav fluid >

                            <Nav.Link className="m-3 " as={Link} to="/">{t("header.Home")} </Nav.Link>
                            <Nav.Link className="m-3 " as={Link} to="nosotros">{t("header.Nosotros")}</Nav.Link>
                            <Nav.Link className="m-3 " as={Link} to="packs">{t("header.Tienda")}</Nav.Link>
                            <Nav.Link className="m-3 " as={Link} to="users">{t("header.Login")}</Nav.Link>
                            <Nav.Link className="m-3 " as={Link} to="perfil">{t("header.Perfil")}</Nav.Link>
                    
                                <Button variant={theme.secondary} onClick={() => i18n.changeLanguage("es")}  className="ms-5 buttongener " >{t("header.Español")}</Button>
                                <Button variant={theme.secondary} onClick={() => i18n.changeLanguage("en")} className="m-1 buttongener" >{t("header.Ingles")}</Button>
                                <Button variant={theme.secondary} onClick={changeTheme} className="m-1 buttongener">{t("header.Tema")}</Button>
                                {logName.usuario !== undefined ?  <p className="buttonuser ">{logName.usuario}</p> :''}
                        

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </React.Fragment >
    )
}

export default Header;