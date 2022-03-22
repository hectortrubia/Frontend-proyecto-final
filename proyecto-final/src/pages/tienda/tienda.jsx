
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
import './tiendastyle.scss';
import { Link } from 'react-router-dom';

function Tienda() {

    const [t, i18n] = useTranslation("global");
    const [theme, updateTheme, changeTheme, logName, setLogName] = useContext(themeContext)


    return (
        <Container fluid className='m-0 p-0'>

        <Row className='m-0 p-0'>
            <Col sm={12} md={12} lg={12} xl={12} xxl={12} className='m-0 p-0'>
                <Image src={nidobn} className='adhome' fluid />
            </Col>
        </Row>

        <Row className='m-0 p-0'>

        <Col sm={12} md={4} lg={4} xl={4} xxl={4} className='m-0 p-0 sectioncontainer'>
                <Image src={quienessomos} fluid />
                    <div className="textotienda">
                        <Card.Title className='titulosection'>Packs chandals</Card.Title>
                        <Card.Text className='subtitulosection'>
                            Sobre nosotros
                        </Card.Text>
                        <Link to="/tienda/packs"><Button className='botonsection' variant="primary" >Visitar</Button></Link>
                    </div>
            </Col>

          

            <Col sm={12} md={4} lg={4} xl={4} xxl={4} className='m-0 p-0 sectioncontainer'>
                <Image src={tiendahome} fluid />
                    <div className="textotienda">
                        <Card.Title className='titulosection'>Pantalones</Card.Title>
                        <Card.Text className='subtitulosection'>
                            Descubre las últimas novedades
                        </Card.Text>
                        <Link to="/tienda/pantalones"><Button className='botonsection' variant="primary" >Visitar</Button></Link>
                    </div>
            </Col>

            <Col sm={12} md={4} lg={4} xl={4} xxl={4} className='m-0 p-0 sectioncontainer'>
                <Image src={comunidad} fluid />
                    <div className="textotienda">
                        <Card.Title className='titulosection'>Chaquetas y sudaderas</Card.Title>
                        <Card.Text className='subtitulosection'>
                            Forma parte de nuestra comunidad
                        </Card.Text>
                        <Link to="/tienda/chaquetas"><Button className='botonsection' variant="primary" >Visitar</Button></Link>
                    </div>
            </Col>
     

        </Row>


    </Container>
)
}

export default Tienda;