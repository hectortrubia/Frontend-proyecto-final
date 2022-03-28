
import React from 'react';
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext";
import { useContext } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import yoga from './yoga.jpg';
import silla from './silla.jpg';
import maca from './maca.jpg';
import sergio from './sergio.jpg';
import './nosotrostyle.scss';
import Carousel from 'react-bootstrap/Carousel'



function Contacto() {

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
                    {/* <Image src={futbol} fluid className="imagenchica" /> */}

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={maca}
      alt="First slide"
    />
    <Carousel.Caption>

  
     
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={sergio}
      alt="Second slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={silla}
      alt="Third slide"
    />

    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={yoga}
      alt="Fourth slide"
    />

    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



                </Col>

                <Col className='m-0 p-0'
                    sm={12}
                    md={{ span: 6, offset: 0, }}
                    lg={{ span: 6, offset: 0, }}
                    xl={{ span: 6, offset: 0, }}
                    xxl={{ span: 6, offset: 0, }} >


                    <div className="containernosotros">
                        <p className="containerparrafo">
                            GEDESPORT S.L.
                            <br></br><br></br>
                            GEDESPORT S.L. es una Empresa fundada en el año 2005, que se dedica a la Comercialización y Distribución de los árticulos de la marca de Equipamiento Deportivo LEGEA, que tiene su Sede Central en la localidad Italiana de Pompei.
                            <br></br><br></br>
                            A lo largo de estos años hemos desarrollado nuestra Red Comercial y hemos incorporado a nuestra estructura todos los procesos que nos permiten dar un Servicio Integral, controlando desde la Producción hasta el consumidor final.

                            Además, desde el año 2016 contamos también con un Departamento de Diseño y Producción de Equipamiento Deportivo totalmente Personalizado.
                            <br></br><br></br>
                            Hoy, desde nuestro Almacen Central situado en Oviedo, a través de nuestra Red de 10 Tiendas situadas en Oviedo, Gijón, Aviles, Lugo, Tui, Vigo y Coruña, con nuestros tres Talleres propios de Estampación y a través de nuestra Página WEB, servimos a más de 300 Entidades y Colectivos y a más de 25.000 Deportistas en nuestra Área de influencia.
                            <br></br><br></br>
                            Somos un Equipo de más de 20 Profesionales orientados a dar una respuesta rápida y eficaz para satisfacer las necesidades de nuestros Clientes.
                            <br></br><br></br>
                            A través de la Planificación y el seguimiento personalizado de cada Colectivo, el Equipamiento de su Club estará en manos de auténticos Profesionales, dedicados en todo momento a poner en lo más alto la imagen de su Entidad.
                            <br></br><br></br>
                            Te invito a unirte al Universo LEGEA.</p>


                    </div>


                </Col>

            </Row>
          

        </React.Fragment>
    )
}

export default Contacto;