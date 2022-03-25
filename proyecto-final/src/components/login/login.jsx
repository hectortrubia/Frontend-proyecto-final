
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext";
import {useContext} from "react";
import { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginstyle.scss';





function Login() {

    const [t, i18n] = useTranslation("global");
    const [theme, updateTheme, changeTheme, logName, setLogName] = useContext(themeContext)
    let [Userdata, updateUserData] = useState([])
    const Navigate = useNavigate()
  
    const handleOnSubmit = e => {
            e.preventDefault()
            const user = {
    
                email: e.target.email.value,
                password: e.target.password.value,
            }
      
    
            fetch('http://localhost:4000/auth/login', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: { 'Content-Type': 'application/json' }
            })
                .then(d => d.json())
                .then((data) => {
                    fetch('http://localhost:4000/users', {
                        method: 'GET',
                        headers: { 'Authorization': `Bearer ${data.access_token}`} 
                        
                    })
                    .then(r=>r.json())
                    .then(info=>{
                         setLogName(info)
                         console.log(info)
                         localStorage.setItem('token',data.access_token)
                         Navigate('/perfil')
                        

                    })
                    console.log(data.access_token)
                   
                
                })
        }
    

    return (
        <React.Fragment>

            
            <div className="containerlogin">
            <div className="titlelogin" > Login</div>

            <Form onSubmit={handleOnSubmit} className="containerform">
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{t("Login.Email")}</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email" className="input"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>{t("Login.Contraseña")}</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" className="input" />
                </Form.Group>
            
                <Button type="submit" className="botonlogin">{t("Login.Entrar")}</Button>
               

            </Form>

            </div>
       
        </React.Fragment>
    )
}

export default Login;