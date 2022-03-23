
import React from 'react';
import { useEffect, useState } from "react";
import CardProduct from '../../components/cardproducto/cardproducto';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function Packs() {


    let [product, updateProduct] = useState([])

    useEffect(() => {

        fetch('http://localhost:4000/products')
            .then(j => j.json())
            .then(data => {
                console.log(data)
                updateProduct(data)
            })
    }, [])

    console.log(product)

    return (

        <div >
            <Container >
                <Row>

                    {product.length === 0 ? <h1>cargando</h1> : product.map((v, i) => {
                        console.log(v)
                        return (

                            <CardProduct key={i} imagen={v.imagen} color={v.color} descripcion={v.descripcion} precio={v.precio} talla={v.talla} tipo={v.tipo}  ></CardProduct>)
                    }

                    )}

                </Row>
            </Container>
        </div>

    )

}
export default Packs









