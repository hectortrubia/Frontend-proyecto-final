
import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext.jsx";
import { useContext } from "react";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
// import Form from 'react-bootstrap/Form';
// import { FloatingLabel } from 'react-bootstrap';
import './productstyle.scss';






function CardProduct(props) {
    const [theme, updateTheme, changeTheme, logName, setLogName] = useContext(themeContext)
    const [t, i18n] = useTranslation("global");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <React.Fragment>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imagen} />
                <Card.Body>
                    <Card.Title>{props.descripcion}</Card.Title>
                    <Card.Text>
                        {props.color}
                        {props.talla}
                        {props.precio}
                    </Card.Text>

                    {/* BOTON MODAL */}
                    <Button variant={theme.secondary} onClick={() => setShow(true)}>
                        Detalles
                    </Button>
                    {/* MOOOOOODAAAL */}
                    <Modal show={show} onHide={() => setShow(false)} ClassName="modal-100w" id="modal_idFull" aria-labelledby="example-custom-modal-styling-title">
                        <Modal.Header  closeButton >
                            <Modal.Title id="example-custom-modal-styling-title">
                                {props.descripcion}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body  className="d-flex justify-content-center flex-row">
                            <Container > <Card.Img  variant="top" src={props.imagen} /> </Container>
                            <Container>
                                <Card.Text className="d-flex justify-content-center">
                                    {props.color}
                                </Card.Text>
                                <Card.Text className="d-flex justify-content-center">
                                    {props.talla}
                                </Card.Text>
                                <Card.Text className="d-flex justify-content-center">
                                    {props.precio}
                                </Card.Text>

                            </Container>
                        </Modal.Body>
                    </Modal>













                </Card.Body>
            </Card>
        </React.Fragment >
    )
}

export default CardProduct;