
import React from 'react';
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext";
import {useContext} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Contacto() {

    const [t, i18n] = useTranslation("global");
    const [theme, updateTheme, changeTheme, logName, setLogName] = useContext(themeContext)

    return (
        <React.Fragment>
              <Form>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control type="text" placeholder="Nombre del club" />
                </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control type="text" placeholder="Nombre del club" />
                </Form.Group>

                <Button variant={theme.primary} type="submit">Enviar</Button>

              </Form>
        </React.Fragment>
    )
}

export default Contacto;