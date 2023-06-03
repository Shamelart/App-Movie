import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Container } from '@mui/material';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import { Link } from "react-router-dom";
import useMoviesByCategory from '../Hooks/useMoviesByCategory';

// @Recibe información del hook useMovieByCategory para generar tablas de Home

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

export default function CustomizedTables({ type, title }) {
	const [movie, loading, error] = useMoviesByCategory(type);
	if (loading) {
		return <div>Cargando...</div>
	}

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: "sm" }} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell sx={{ textAlign: "center", fontSize: "1.3em" }}>{title}</StyledTableCell>
					</TableRow>
				</TableHead>
				<ul style={{ maxHeight: "650px", overflow: "auto" }}>
					{movie.map((movie) => (
						<li key={movie.id} style={{ padding: "10px" }}>
							<Container component="div" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
								<img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt="" width={60} height={60} style={{ borderRadius: "50%" }} />
								<Typography>
									{movie.title}
								</Typography>
								<Link to={`/movie/${movie.id}`}>
									<SlowMotionVideoIcon />
								</Link>
							</Container>
						</li>
					))}
				</ul>
			</Table>
		</TableContainer>
	);
}