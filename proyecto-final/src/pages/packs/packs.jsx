
import React from 'react';
import  Container  from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext.jsx";
import {useContext} from "react";

function Packs() {

    const [t, i18n] = useTranslation("global");
    const [theme, updateTheme, changeTheme, logName, setLogName] = useContext(themeContext)


    return (
        <React.Fragment>
            <Container>Esto es la seccion packs chandals</Container>
        </React.Fragment>
    )
}

export default Packs;