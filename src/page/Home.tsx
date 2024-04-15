import { Box } from "@mui/material";
import CrCard from "../components/CrCard";
import CrNavbar from "../components/CrNavbar";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json)) 
    }, [])

    return (
    <>
    <CrNavbar />
    <Box sx ={{
        display: 'flex',
        marginTop: '20px',
        gap: '20px',
    }}>
    {[1,2].map((item) => (
        <CrCard key={item} />
    ))}
    </Box>
    </>
    )
}

export default Home;