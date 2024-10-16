import React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import ImagesList from '../components/imagesList/ImagesList';
import Upload from '../components/upload/Upload'

const Gallery = () => {
  return (
    <div>
         <Grid
         container
         spacing={0}
         direction="column"
         alignItems="center"
         justifyContent="center"
         style={{ minHeight: '35vh' }} > 
        <Box height={100}>
            <h1 style={{textAlign:"center",color:"#375980"}}>Projects Gallery</h1>
            <Upload/>
            <br/>
            <ImagesList/>
        </Box>
    </Grid>
    </div>
  )
}

export default Gallery;