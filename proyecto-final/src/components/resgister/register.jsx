
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext";
import { useContext } from "react";
import { useState, } from 'react';
import './registerstyle.scss';


function Register() {

    const [t, i18n] = useTranslation("global");
    const [theme, updateTheme, changeTheme, logName, setLogName] = useContext(themeContext)

    let [Userdata, updateUserData] = useState([])
    const handleOnSubmit = e => {
        e.preventDefault()
        const user = {
            club: e.target.club.value,
            persona: e.target.persona.value,
            telefono: e.target.telefono.value,
            usuario: e.target.usuario.value,
            email: e.target.email.value,
            password: e.target.password.value,

        }
        console.log(user)

        fetch('http://localhost:4000/auth/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(d => d.json())
            .then((data) => {
                updateUserData(...Userdata, user)
                console.log(data)
            })
    }

    return (
        <React.Fragment>

            <div className="containerreg">
                <div className="titlereg" >Crear una cuenta</div>
                <Form onSubmit={handleOnSubmit} className="containerformreg" >

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{t("Register.Club")}</Form.Label>
                        <Form.Control className="inputreg" type="text" placeholder="Nombre del club" name="club" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{t("Register.Persona")}</Form.Label>
                        <Form.Control className="inputreg" type="text" placeholder="Persona de contacto" name="persona" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{t("Register.Telefono")}</Form.Label>
                        <Form.Control className="inputreg" type="number" placeholder="Telefono de contacto" name="telefono" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{t("Register.Usuario")}</Form.Label>
                        <Form.Control className="inputreg" type="text" placeholder="Persona de contacto" name="usuario" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{t("Register.Email")}</Form.Label>
                        <Form.Control className="inputreg" type="email" placeholder="Email" name="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>{t("Register.Contraseña")}</Form.Label>
                        <Form.Control className="inputreg" type="password" placeholder="Password" name="password" />
                    </Form.Group>


                    <Button className="botonreg" variant={theme.primary} type="submit">{t("Register.Enviar")}</Button>

                </Form>
                </div>
        </React.Fragment>
    )
}

export default Register;