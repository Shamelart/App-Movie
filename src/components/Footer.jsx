import { AppBar, Container, Typography } from "@mui/material"

export default function Footer() {
	return (
		<Container style={{ backgroundColor: "black", maxWidth: "100%", height:"70px", marginTop:"110px"}} >
			<Typography variant="h5" sx={{color: "red", textAlign: "center", paddingTop: "20px"}}>
				Hecho por  Shamelart...
			</Typography>
		</Container>

	)
}
