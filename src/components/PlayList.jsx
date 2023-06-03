import React, { useContext } from 'react'
import useMovie from '../Hooks/useMovie';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Container, Button, Typography, Box, Grid } from '@mui/material';
import Movie from './Movie';
import CardMovie from './CardMovie';

// importaciones de context
import { PlayListContext } from "../context/PlayListContext";

export default function PlayList() {
  const { list, removeMovie } = useContext(PlayListContext);

  return (
    <Grid Container spacing={1}
      sx={{       
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "6%"       
      }}>
      {
        list.map((movie) =>
          <Grid item key={movie.id}>
            <CardMovie
              id={movie.id}
              estreno={movie.release_date}
              imagen={movie.backdrop_path}
              puntuacion={movie.vote_average}
              title={movie.title}
              removeFunction={removeMovie}
            />
          </Grid>
        )
      }
    </Grid>
  );
}
