import React, { useState } from 'react';
import {
  Grid,
  Container,
  Box,
  Stack,
  Paper
} from '@mui/material';

import {
  ArrowCircleRightRounded,
  ArrowCircleLeftRounded,
  FavoriteBorderRounded,
  ShareRounded,
  DownloadRounded
} from '@mui/icons-material';

const Slider = () => {

  const [imageURL, setImageURL] = useState('https://i.waifu.pics/CWZ2Q2V.jpg');
  

  return (
    <React.Fragment>
      <Container disableGutters={true} >
        <Grid container sx={{ height: '82vh' }} >
          <Grid item xs={2} sm={2} md={2} lg={3} xl={3} style={{ width: 'inherit', height: 'inherit' }}>
            <Box sx={{ display: 'flex', width: 'inherit', height: 'inherit', justifyContent: 'center', alignItems: 'center' }}>
              <ArrowCircleLeftRounded />
            </Box>
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={6} xl={6} style={{ width: 'inherit', height: 'inherit' }}>
            <Box sx={{ width: 'inherit', height: 'inherit' }} >
              <img src={imageURL} loading='lazy' style={{ width: 'inherit', height: 'inherit' }} />
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={3} xl={3} style={{ width: 'inherit', height: 'inherit' }}>
            <Box sx={{ display: 'flex', width: 'inherit', height: 'inherit', justifyContent: 'center', alignItems: 'center' }}>
              <ArrowCircleRightRounded />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2%'}} >
          <Stack direction="row" spacing={10}>
            <Paper elevation={3}><DownloadRounded /></Paper>
            <Paper elevation={3}><FavoriteBorderRounded /></Paper>
            <Paper elevation={3}><ShareRounded /></Paper>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Slider;