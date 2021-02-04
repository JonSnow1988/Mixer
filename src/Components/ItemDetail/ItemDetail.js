import React from 'react'
import {Card, Button } from 'react-bootstrap'
import count from '../../Containers/CountContainer'
import './itemDetailStyle.css'

export default function ItemDetail({item, loading, Count, setCount, handlePurchase}) {

    return (
        loading ? 
            <React.Fragment>            
            <div className='itemst'>
                <Card className="text-center" bg='secondary' text='white' style={{minHeight:'90vh'}}>
                <Card.Header>Detalles del Producto</Card.Header>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text> {item.description}</Card.Text>                 
                   
                    <div className="countItem">
                        <Count min={0} max={item.stock} Count={Count} setCount={setCount}>Agregar</Count>
                    </div>
                    {
                        Count > 0 ? 
                            <Button variant="primary" onClick={handlePurchase}>Comprar {Count}</Button>
                            :
                            <Button variant="primary" onClick={()=>setCount(Count+1)}>Agregar!</Button>
                    }
                </Card.Body>
                <Card.Footer className="text-white">{item.stock} en Stock!</Card.Footer>
                </Card>
            </div>
            </React.Fragment>
            
        :
    )
}