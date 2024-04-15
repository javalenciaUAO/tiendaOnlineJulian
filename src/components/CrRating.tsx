import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function CrRating() {
  const [value, setValue] = React.useState<number | null>(2)
//Este es un comentario
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Calificacion</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      />
     
    </Box>
  )
}