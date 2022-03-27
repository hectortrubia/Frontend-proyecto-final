
import React from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


function Footer() {
    const [theme, updateTheme, changeTheme] = useContext(themeContext)

    const [t, i18n] = useTranslation("global");

    return (
        <React.Fragment>
            <Navbar bg={theme.secondary} style={{ height: "100px" }}>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="navbarcontainer">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
                        <Nav className="me-auto" fluid>
                            <Nav.Link as={Link} to="/">{t("header.Home")}</Nav.Link>
                            <Nav.Link as={Link} to="tienda">{t("header.Tienda")}</Nav.Link>
                            <Nav.Link as={Link} to="contacto">{t("header.Contacto")}</Nav.Link>
                            <Button onClick={changeTheme} variant={theme.primary}>{t("header.Tema")}</Button>
                            <Button onClick={() => i18n.changeLanguage("es")} >ES</Button>
                            <Button onClick={() => i18n.changeLanguage("en")} >EN</Button>
                            <Nav.Link as={Link} to="users">{t("header.Login")}</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default Footer;