import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext";
import { useContext } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';


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
        Navigate('/')

    }




    return (

        <React.Fragment>


            <p>{user.usuario}</p>
            <Button onClick={handleDelete}>eliminar mi usuario</Button>
            <Button variant={theme.primary} onClick={handleLogout} type="submit">{t("Login.Salir")}</Button>

            </React.Fragment>
            )
}

        
        export default Perfil;