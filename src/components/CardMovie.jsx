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

export default function CardMovie({ id, title, imagen, puntuacion, estreno, removeFunction }) {

  // @ Recibe información del hook useMoviesByCategory
  return (
    <Card
      sx={{
        width: " 88%",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        marginTop: "6%"
      }}>
      <CardActionArea
        style={{
          width: "100%",
          flexGrow: "2", objectFit: "cover",
          justifyContent: "center", transition: "0.5s easy"
        }}>
        <CardMedia
          component="img"
          sx={{ width: "282px", height: "200px" }}
          image={`https://image.tmdb.org/t/p/w1280${imagen}`}
          alt={title}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div" noWrap
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
            overflow: 'hidden',
            margin: "0",
            maxWidth: "200px",
            paddingLeft: "18px",
            paddingRight: "18px"
          }}>
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" noWrap
          sx={{
            fontSize: "15px",
            textAlign: 'center',
            margin: "0"
          }}>
          Estreno: {estreno}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" noWrap
          sx={{
            fontSize: "15px",
            textAlign: 'center',
            overflow: 'hidden',
            width: "250px",
            margin: "0"
          }}>
          Puntuación: {puntuacion}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: "0", display: "flex", justifyContent: "center" }} >
        <Link to={`/movie/${id}`} >
          <Button style={{
            marginBottom: "5px",
            margin: "0",
            fontSize: "14px",
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.381)",
            color: "white",
            background: "#171717CC",
            width: "110px"
          }}>
            Ver mas...
          </Button>
        </Link>
        {
          removeFunction && (<Button onClick={() => removeFunction(id)} style={{
            marginBottom: "5px",
            marginLeft: "10%",
            fontSize: "14px",
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.381)",
            color: "white",
            background: "#171717CC",
            width: "110px",
            marginTop: "0"
          }}>
            Eliminar
          </Button>)
        }
      </CardActions>
    </Card>
  );
}