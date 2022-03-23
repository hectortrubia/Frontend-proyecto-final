
import React from 'react';
import Card from 'react-bootstrap/Card'



function CardProduct(props) {


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
                </Card.Body>
            </Card>
        </React.Fragment >
    )
}

export default CardProduct;