import Carrusel from './Swiper'
import MovieTbles from './MovieTables'

export default function Homes() {
// @Recibe import de la carpeta Swiper para generar carrucel
// @Recibe import de MovieTbles para renderizar tablas del Home

	return (
		< div
			style={{
				maxWidth: '100vw',
				color: '#fff',
			}
			}>
			<div>
				<Carrusel />
			</div>
			<div style={{ display: "flex", gap: "100px", padding: "50px" }}>
				<MovieTbles type={'top_rated'} title={'Peliculas Populares'} />
				<MovieTbles type={'upcoming'} title={'Estrenos'} />
			</div>
		</div>
	)
}
