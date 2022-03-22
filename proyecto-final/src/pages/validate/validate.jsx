
import React from 'react';
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext.jsx";
import {useContext} from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { useSearchParams } from "react-router-dom";
import { Link } from 'react-router-dom';



function Validate() {
    const [queryParams] = useSearchParams();
    const param = queryParams.get('token')
    const [t, i18n] = useTranslation("global");
    const [theme, updateTheme, changeTheme, logName, setLogName] = useContext(themeContext)

   
    useEffect(() => {
        fetch(`http://localhost:4000/auth/validate?token=${param}`)
            .then(d => d.json())
            .then(data => console.log(data))

    },[]);


    return (
        <Link to="/perfil"><Button className='botonsection' variant="primary" >Volver a Home</Button></Link>
    )
}

export default Validate;