
import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext";
import { useContext } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';


function Edituser() {


    const [t, i18n] = useTranslation("global");
    const [theme, updateTheme, changeTheme, logName, setLogName] = useContext(themeContext)
    let [user, updateuser] = useState([]);
    // const Navigate = useNavigate()

    // let token = localStorage.getItem('token')

    return (

        <React.Fragment>



            <p>Por favor envianos tus nuevos datos para modificar tu usuario</p>

          
                <Form  >

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{t("Register.Club")}</Form.Label>
                        <Form.Control type="text" placeholder="Nombre del club" name="club" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{t("Register.Persona")}</Form.Label>
                        <Form.Control type="text" placeholder="Persona de contacto" name="persona" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{t("Register.Telefono")}</Form.Label>
                        <Form.Control type="number" placeholder="Telefono de contacto" name="telefono" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{t("Register.Usuario")}</Form.Label>
                        <Form.Control type="text" placeholder="Persona de contacto" name="usuario" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{t("Register.Email")}</Form.Label>
                        <Form.Control type="email" placeholder="Email" name="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>{t("Register.Contraseña")}</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" />
                    </Form.Group>


                    <Button variant={theme.primary} type="submit">{t("Register.Enviar")}</Button>

                </Form>
            </React.Fragment>
            )
}

        
        export default Edituser;