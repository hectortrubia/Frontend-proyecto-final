import React from 'react';
import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext.jsx";
import { useContext } from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import nidobn from './nidobn.jpg'
import tiendahome from './tiendahome.jpg'
import quienessomos from './quienessomos.jpg'
import comunidad from './comunidad.jpg'
import Button from 'react-bootstrap/Button'
import './homestyle.scss';
import { Link } from 'react-router-dom';


function Home() {

    const [t, i18n] = useTranslation("global");
    const [theme, updateTheme, changeTheme] = useContext(themeContext)


    return (

        <Container fluid className='m-0 p-0'>

            <Row className='m-0 p-0'>
                <Col sm={12} md={12} lg={12} xl={12} xxl={12} className='m-0 p-0'>
                    <Image src={nidobn}  fluid />
                </Col>
            </Row>

            <Row className='m-0 p-0'>

            <Col sm={12} md={4} lg={4} xl={4} xxl={4} className='m-0 p-0 sectioncontainer'>
                    <Image src={quienessomos} fluid />
                        <div className="textotienda">
                            <Card.Title className='titulosection'>Sobre nosotros</Card.Title>
                            <Card.Text className='subtitulosection'>
                                Sobre nosotros
                            </Card.Text>
                            <Link to="/nosotros"><Button className='botonsection' variant="primary" >Saber más</Button></Link>
                        </div>
                </Col>

              

                <Col sm={12} md={4} lg={4} xl={4} xxl={4} className='m-0 p-0 sectioncontainer'>
                    <Image src={tiendahome} fluid />
                        <div className="textotienda">
                            <Card.Title className='titulosection'>Tienda</Card.Title>
                            <Card.Text className='subtitulosection'>
                                Descubre las últimas novedades
                            </Card.Text>
                            <Link to="/packs"><Button className='botonsection' variant="primary" >Entrar</Button></Link>
                        </div>
                </Col>

                <Col sm={12} md={4} lg={4} xl={4} xxl={4} className='m-0 p-0 sectioncontainer'>
                    <Image src={comunidad} fluid />
                        <div className="textotienda">
                            <Card.Title className='titulosection'>Registro</Card.Title>
                            <Card.Text className='subtitulosection'>
                                Forma parte de nuestra comunidad
                            </Card.Text>
                            <Link to="/users"><Button className='botonsection' variant="primary" >Registrarme</Button></Link>
                        </div>
                </Col>
         

            </Row>


        </Container>
    )
}

export default Home;