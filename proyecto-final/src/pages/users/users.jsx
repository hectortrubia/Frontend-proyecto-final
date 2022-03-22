
import React from 'react';
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext";
import {useContext} from "react";
import Login from '../../components/login/login';
import Register from '../../components/resgister/register';


function Users() {

    const [t, i18n] = useTranslation("global");
    const [theme, updateTheme, changeTheme, logName, setLogName] = useContext(themeContext)

    return (
        <React.Fragment>
        <Login></Login>
        <Register></Register>
        </React.Fragment>
    )
}

export default Users;