import { Box, Container, Grid } from "@mui/material";
import CrCard from "../components/CrCard";
import CrNavbar from "../components/CrNavbar";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}


const Home = () => {
    const [data, setdata] = useState([])
    const [loadin, setLoadin] = useState(false)

    useEffect(() => {
        setLoadin(true)
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                
                console.log(json)
                setdata(json)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoadin(false)
                console.log('fetch finalizado')
            })
    }, [])

    return (
    <>
    <CrNavbar />
    <Container maxWidth='lg'>
    <Box sx ={{
        display: 'flex',
        marginTop: '20px',
        gap: '20px',
    }}
    >
        {loadin ? (
            <p>Loading...</p>
        ) : (
        <Grid container spacing={2}>
            {data.map((item:Product) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={4} xl={3}>
                <CrCard imagen={item.image} />
                </Grid>
            ))}
            </Grid>
        )}
        </Box>
        </Container>
        </>
        )
    }

export default Home;