

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
import './headerstyle.scss';




function Header() {
    const [theme, updateTheme, changeTheme, logName, setLogName] = useContext(themeContext)

    const [t, i18n] = useTranslation("global");

    return (
        <React.Fragment>

            <Navbar collapseOnSelect expand="md" bg={theme.primary} style={{ height: "70px"}}>
                <Container className="p-0 m-0">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" fluid >
                            <Nav.Link as={Link}  to="/">{t("header.Home")} </Nav.Link>
                            <Nav.Link as={Link} to="packs">{t("header.Tienda")}</Nav.Link>
                            <Nav.Link as={Link} to="nosotros">{t("header.Nosotros")}</Nav.Link>
                            <Nav.Link as={Link} to="users">{t("header.Login")}</Nav.Link>
                            <Nav.Link as={Link} to="perfil">{t("header.Perfil")}</Nav.Link>
                         
{/* 
                            <Link  to="/" className="textnav">{t("header.Home")}</Link>
                            <Link  to="tienda" variant={'info'}>{t("header.Tienda")}</Link>
                            <Link  to="nosotros" variant={theme.secondary}>{t("header.Contacto")}</Link>
                            <Link  to="users" variant={theme.secondary}>{t("header.Login")}</Link>
                            <Link  to="perfil" variant={theme.secondary}>perfil</Link> */}


                        </Nav>
                        {logName.usuario!==undefined?<p className="user">{`${logName.usuario}`}</p>: ''}
                        <Nav className="p-0 m-0" fluid>
                            <Button onClick={() => i18n.changeLanguage("es")} className="me-1" >ES</Button>
                            <Button onClick={() => i18n.changeLanguage("en")} className="ms-1" >EN</Button>
                            <Button  onClick={changeTheme} className="ms-1" >Cambiar Color</Button>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </React.Fragment >
    )
}

export default Header;