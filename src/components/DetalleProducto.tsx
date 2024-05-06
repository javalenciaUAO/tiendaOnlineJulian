import HomeLayaout from '../page/layaout/HomeLayaout';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

const DetalleProducto = () => {
    const history = useHistory()
    const { slug } = useParams()

const [detalle, setDetalle] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/productos/${slug}`)
        .then((res) => res.json())
        .then((data) => setDetalle(data))
    }, [slug])

    return (
        <HomeLayaout>
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                }}
            >
                <h1>{slug}</h1>
                <code>{JSON.stringify(detalle, null, 2)}</code>
                <Button variant='contained' onClick={() => history.push('/home')}>
                    ir atras{' '}
                </Button>
            </div>
        </HomeLayaout>
    )
}

export default DetalleProducto;