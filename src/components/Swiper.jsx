import { useContext } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { HomeBannerContext } from '../context/HomeBannerContext';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

import '../assets/swiper.css'

export default function Carrusel() {
  const { loading, movies, error } = useContext(HomeBannerContext);
  const movie = loading ? {} : movies[0];
// @genera carrucel
  return (
    <div>
      <Swiper className="swiper_container" autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }} pagination={true} modules={[Pagination, Autoplay]}>
        {
          loading ? <p>Cargando ...</p> : (
            movies.map((movie, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="swipe">
                    <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="not found" />
                    <div className='movie_info'>
                      <h3>{movie.title}</h3>
                      <p>{movie.overview}</p>
                      <Link to={`/movie/${movie.id}`}><Button sx={{
                        backgroundColor: "white", color: "black", padding: "5px 20px"
                      }}>Ver Más...</Button></Link>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          )
        }
      </Swiper>
    </div>
  );
}
