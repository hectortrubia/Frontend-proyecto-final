

import React from 'react';
import { useEffect, useState } from "react";
import CardProduct from '../../components/cardproducto/cardproducto';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import './packstyle.scss';


function Packs() {

    const [theme, updateTheme, changeTheme, logName, setLogName] = useContext(themeContext)
    const [t, i18n] = useTranslation("global");
    let [product, updateProduct] = useState([])
    let [pfilter, updatefilter] = useState(product)

    useEffect(() => {

        fetch('http://localhost:4000/products')
            .then(j => j.json())
            .then(data => {
                console.log(data)
                updateProduct(data)
                updatefilter(data)
            })
    }, [])

    const Onfilter = (e) => {
        let arrnew = product.filter(v => v.tipo.toLowerCase().includes(e.target.value.toLowerCase()))
        updatefilter(arrnew)

    }



    return (

        <div >
            <div className="containerfilter" bg={theme.secondary}>
            <p className="containertext " >Encuentra tu producto</p>
                <input className="inputfilter" onChange={Onfilter} type="text" ></input>
            </div>

            <Container  >
                <Row >

                    {pfilter === 0 ? <h1>cargando</h1> : pfilter.map((v, i) => {
                        console.log(v)
                        return (

                            <CardProduct   key={i} imagen={v.imagen} color={v.color} descripcion={v.descripcion} precio={v.precio} talla={v.talla} tipo={v.tipo}  ></CardProduct>)
                    }

                    )}

                </Row>
            </Container>
        </div>

    )

}
export default Packs









