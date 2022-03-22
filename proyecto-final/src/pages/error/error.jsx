
import React from 'react';
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext";
import {useContext} from "react";


function Error() {

    const [t, i18n] = useTranslation("global");
    const [theme, updateTheme, changeTheme, logName, setLogName] = useContext(themeContext)

    return (
        <React.Fragment>
        <p>, error 404,Página no encontrada no es la pagina que estas buscando</p>
        </React.Fragment>
    )
}

export default Error;