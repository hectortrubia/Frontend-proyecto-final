
import React from 'react';
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext";
import { useContext } from "react";
import Login from '../../components/login/login';
import Register from '../../components/resgister/register';
import './userstyle.scss';
import running from './running.jpg'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';



function Users() {

    const [t, i18n] = useTranslation("global");
    const [theme, updateTheme, changeTheme, logName, setLogName] = useContext(themeContext)

    return (
        <React.Fragment>
            
                <Row className='m-0 p-0' fluid>

                    <Col className='m-0 p-0' 
                        sm={12}
                        md={{ span: 6, offset: 0, }}
                        lg={{ span: 6, offset: 0, }}
                        xl={{ span: 6, offset: 0, }}
                        xxl={{ span: 6, offset: 0, }}
                        >
                        <Login ></Login>
                   
                        <Register ></Register>

                    </Col>

                    <Col className='m-0 p-0' 
                        sm={12}
                        md={{ span: 6, offset: 0, }}
                        lg={{ span: 6, offset: 0, }}
                        xl={{ span: 6, offset: 0, }}
                        xxl={{ span: 6, offset: 0, }} >
                        <Image src={running} fluid className="imagenchica" />
                    </Col>

                </Row>
         
        </React.Fragment>



    )
}

export default Users;