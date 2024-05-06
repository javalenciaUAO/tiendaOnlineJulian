import { Box, Container, Grid } from "@mui/material";
import CrCard from "../components/CrCard";
import { useEffect, useState } from "react";
import { Product } from "../types/Productos";
import HomeLayaout from "./layaout/HomeLayaout";
import { useLocation } from "react-router-dom";

const Home = () => {
    const [data, setdata] = useState<Product[]>([])
    const [loadin, setLoadin] = useState<boolean>(false)
    const [error, setError] = useState(false)
    const location = useLocation();

    console.log(location.pathname)

    const handleFetch = async () => {
        setLoadin(true)
        try {
            const data = await fetch('https://fakestoreapi.com/products')
            const response = await data.json()
            setdata(response)
        }catch (error){
            setError(true)
        }finally{
            setLoadin(false)
        }
    } 

    useEffect(() => {
       handleFetch()
    }, [])

    if (error) {
        return (
            <div>
            <h1>Error</h1>    
            </div>
        )
    }

    return (
    <HomeLayaout>
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
                <CrCard item={item} />
                </Grid>
            ))}
            </Grid>
        )}
        </Box>
        </Container>
        </HomeLayaout>
        )
    }

export default Home