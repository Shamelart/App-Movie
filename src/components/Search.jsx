import * as React from 'react';
import TextField from '@mui/material/TextField';
import useSearchMovie from '../Hooks/useSearchMovie';
import { Container, Box, Grid } from '@mui/material';
import CardMovie from './CardMovie';

export default function Search() {
  const { movies, loading, error, handleChange } = useSearchMovie();

  return (
    <Container maxWidth="false" sx={{ pt: 12, width: 1, minHeight: "90vh", }}>
      <Box sx={{ width: '50%', p: 2, minHeight: "25vh", bgcolor: "white" }}>
        <TextField onChange={(e) => handleChange(e)}
          fullWidth label="BUSCAR" variant="outlined"
          id="fullWidth" sx={{
            color: 'primary',
            borderRadius: '10px'
          }} />
      </Box>
      <Grid
        container
        spacing={1}
        sx={{ paddingLeft: "5%", width: "100%", display: "flex" }}
      >
        {loading ? (
          <></>
        ) : (
          movies.map((movie) => (
            <Grid item key={movie.id}>
              <CardMovie
                id={movie.id}
                title={movie.title}
                imagen={movie.backdrop_path}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
