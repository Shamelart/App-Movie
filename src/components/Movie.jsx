import React, { useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Container, Button, Typography } from '@mui/material';
import VideoModal from './Modal';
import useMovie from '../Hooks/useMovie';
import useVideo from '../Hooks/useVideo';
import CardMovie from './CardMovie';
import Rating from './Rating';
import '../assets/swiper.css';

// importaciones de context
import { PlayListContext } from "../context/PlayListContext";

// @Genera la vista viedos con el hook useVideo generando un modal

export default function Movie() {
  const { movieid } = useParams();
  const { movie, error, loading } = useMovie(movieid);
  const { video, erro, load } = useVideo(movieid);
  const videoId = !load && video.results[0].key;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { addMovie } = useContext(PlayListContext);

  if (loading) {
    return <div>Cargando...</div>
  }
  console.log(movie)
  const handleClick = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <Container component={"div"}
      sx={{ width: "100%", height: "400px", marginTop: "68.5px" }} sm={{ width: "100%", height: "100%", }}>
      <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="not found"
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: "16 / 9",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1",
          filter: "brightness(0.6)"
        }} />
      <div style={{
        marginLeft: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "45%",
        height: "100%"
      }}
      >
        <h3 style={{
          fontSize: "50px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          textShadow: "1px 1px 5px rgba(0, 0, 0, 0.381)",
          marginTop: "60px",
          color: "whitesmoke"
        }}
        >
          {movie.title}
        </h3>
        <br />
        <Rating votes={movie.vote_average} />
        <br />
        <h4 style={{ color: "whitesmoke", fontSize: "15px" }}>{movie.overview}</h4>
        <br />
        <h4 style={{ color: "whitesmoke", fontSize: "15px" }}>Género: {movie.genres[0].name}</h4>
        <div>
          <Button onClick={() => {
            addMovie(movie)
          }}
            style={{
              marginTop: "40px",
              fontSize: "16px",
              textShadow: "1px 1px 5px rgba(0, 0, 0, 0.381)",
              color: "white",
              background: "#171717CC",
              width: "150px",
              marginRight: "30px"
            }}
          >
            Play List
          </Button>

          <Button onClick={handleClick} style={{
            marginTop: "40px",
            fontSize: "16px",
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.381)",
            color: "white",
            background: "#171717CC",
            width: "150px"
          }}
          >
            Ver Trailer
          </Button>
          {
            isModalOpen ? <VideoModal videoId={videoId} handleClick={handleClick} /> : null
          }
        </div>
      </div>
    </Container>
  )
}
