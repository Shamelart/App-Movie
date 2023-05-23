import React from 'react'
import { Box, Button, Modal } from "@mui/material";

export default function VideoModal({ videoId, handleClick }) {
    return (
        <Modal
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ width: "800px", height: "500px", background: "white" }} >
                <iframe width="900" height="500" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <Button onClick={handleClick} style={{
                    fontSize: "16px",
                    color: "white",
                    background: "#171717CC",
                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.381)",
                    position: "relative",
                    bottom: "51px",
                    left: "812px"                    
                }}
                >
                    Cerrar
                </Button>
            </Box>
        </Modal>
    )
}





