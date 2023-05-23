import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import useMoviesByCategory from '../Hooks/useMoviesByCategory';
import Rating from './Rating';

export default function CardMovie({ id, title, imagen, puntuacion, estreno, ratin, genres }) {

  // @ Recibe información del hook useMoviesByCategory
  return (
    <Card>
      <CardActionArea style={{ display: "flex", width: "100%", flexGrow: "1", objectFit: "cover", justifyContent: "center", transition: "0.5s easy" }}>
        <CardMedia
          component="img"
          sx={{ width: "250px", alignContent: "center", height: "280px", display: "flex", flexDirection: "column" }}
          image={`https://image.tmdb.org/t/p/w1280${imagen}`}
          alt={title}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div" noWrap
          sx={{
            fontSize: "20px",
            textAlign: 'center',
            overflow: 'hidden',
            width: "250px",

          }}>
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" noWrap
          sx={{
            fontSize: "17px",
            textAlign: 'center',
            overflow: 'hidden',
            width: "250px",
          }}>
          Estreno: {estreno}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" noWrap
          sx={{
            fontSize: "17px",
            textAlign: 'center',
            overflow: 'hidden',
            width: "250px",
          }}>
          Puntuación: {puntuacion}
        </Typography>
        <Rating votes={ratin} />
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }} >
        <Link to={`/movie/${id}`} >
          <Button style={{
            marginBottom: "15px",
            fontSize: "16px",
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.381)",
            color: "white",
            background: "#171717CC",
            width: "150px"
          }}>
            Ver mas...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}