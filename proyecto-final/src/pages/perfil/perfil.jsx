import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext";
import { useContext } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import './perfilstyle.scss';
import juvencia from './juvencia.jpg'
import { Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import ciclismo from './ciclismo.jpg';
import Row from 'react-bootstrap/Row';


function Perfil() {

    const [t, i18n] = useTranslation("global");
    const [theme, updateTheme, changeTheme, logName, setLogName] = useContext(themeContext)
    let [user, updateuser] = useState([]);
    const Navigate = useNavigate()

    let token = localStorage.getItem('token')




    useEffect(() => {

        fetch('http://localhost:4000/users', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {

                updateuser(data)

            })


    }, [])
    console.log(user)


    const handleDelete = () => {

        fetch('http://localhost:4000/users', {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(j => j.json())
            .then(data => {
                console.log(data)
                localStorage.removeItem('token')
              
                Navigate('/')

            })

    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        setLogName('')
        Navigate('/')

    }



    return (

        <React.Fragment>

<Row className='m-0 p-0' fluid>


            <Col className='m-0 p-0'
                sm={12}
                md={{ span: 6, offset: 0, }}
                lg={{ span: 6, offset: 0, }}
                xl={{ span: 6, offset: 0, }}
                xxl={{ span: 6, offset: 0, }} >
                <Image src={ciclismo} fluid className="imagenfutbol" />
            </Col>

            <Col className='m-0 p-0'
               sm={12}
               md={{ span: 6, offset: 0, }}
               lg={{ span: 6, offset: 0, }}
               xl={{ span: 6, offset: 0, }}
               xxl={{ span: 6, offset: 0, }}>


            <div className="containerperfil">
                <Image src={juvencia} className="imagen" />
                <p>Club: {user.club}</p>
                <p>Usuario: {user.usuario}</p>
                <p>Persona de contacto: {user.persona}</p>
                <p>Teléfono: {user.telefono}</p>
                <p>Email: {user.email}</p>


                <div className="containerbutons">
                    <Button className='botonperfil' variant={theme.secondary} onClick={handleDelete}>{t("Perfil.Eliminar")}</Button>
                    <Button className='botonperfil' variant={theme.secondary} onClick={handleLogout} type="submit">{t("Perfil.Salir")}</Button>
                </div>

            </div>
            </Col>
            
            </Row>



        </React.Fragment>
    )
}


export default Perfil;