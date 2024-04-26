import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CrChips from './CrChips';
import CrRating from './CrRating';
import { Stack } from '@mui/material';
import CrBtnAccion from './CrBtnAccion';

export default function CrCard() {


  return (
    <Card sx={{ maxWidth: 345 }}>
      <Stack direction="row" m={2} spacing={2}>
        <CrChips />
        </Stack>
      <CardMedia 
        sx={{ height: 500 }}
        component={"img"}
        image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        title="Chaqueta de cuero"
        style={{
          width: "200",
          height: "200",
          objectFit: "contain",
        }}
        alt="Chaqueta de cuero"
      />
      <CardContent>        
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <CrRating />
      </CardContent>
      <CardActions>
        <CrBtnAccion/>
      </CardActions>
    </Card>
  )
}