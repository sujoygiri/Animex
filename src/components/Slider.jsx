import React, { useState, useEffect } from 'react';

import {
  Grid,
  Container,
  Box,
  Stack,
  IconButton
} from '@mui/material';

import {
  ArrowCircleRightRounded,
  ArrowCircleLeftRounded,
  FavoriteBorderRounded,
  ShareRounded,
  DownloadRounded
} from '@mui/icons-material';


const Slider = ({ typeAndCategory }) => {

  const [imageUrl, setImageUrl] = useState('');
  const [disablePreviousButton, setDisablePreviousButton] = useState(true)

  const getApiData = async () => {
    let urlObj = await electron.urlApi.getUrl(typeAndCategory);
    console.log(urlObj);
    setDisablePreviousButton(urlObj.disabledButtonStatus);
    setImageUrl(urlObj.url);
  };
  
  useEffect(() => {
    getApiData();
  }, [typeAndCategory]);
  
  
  const handelPreviousImage = async () => {
    let urlObj = await electron.urlApi.previousUrl()
    console.log(urlObj);
    setDisablePreviousButton(urlObj.disabledButtonStatus)
    setImageUrl(urlObj.url);
  };
  
  const handelNextImage = async () => {
    let urlObj = await electron.urlApi.nextUrl(typeAndCategory)
    console.log(urlObj);
    setDisablePreviousButton(urlObj.disabledButtonStatus)
    setImageUrl(urlObj.url);
  };

  const handelImageDownload = async () => {
    await electron.handelImage.downloadImage(imageUrl)
  }

  return (
    <React.Fragment>
      <Container disableGutters={true} >
        <Grid container sx={{ height: '82vh' }} >
          <Grid item xs={2} sm={2} md={2} lg={3} xl={3} style={{ width: 'inherit', height: 'inherit' }}>
            <Box sx={{ display: 'flex', width: 'inherit', height: 'inherit', justifyContent: 'center', alignItems: 'center' }}>
              <IconButton onClick={handelPreviousImage} disabled={disablePreviousButton}>
                <ArrowCircleLeftRounded sx={{ cursor: 'pointer' }} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={6} xl={6} style={{ width: 'inherit', height: 'inherit' }}>
            <Box sx={{ width: 'inherit', height: 'inherit', mt: 0.5 }} >
              <img src={imageUrl} loading='lazy' style={{ width: 'inherit', height: 'inherit' }} onLoad={() => console.log('loaded')} />
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={3} xl={3} style={{ width: 'inherit', height: 'inherit' }}>
            <Box sx={{ display: 'flex', width: 'inherit', height: 'inherit', justifyContent: 'center', alignItems: 'center' }}>
              <IconButton onClick={handelNextImage}>
                <ArrowCircleRightRounded sx={{ cursor: 'pointer' }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1.5%' }} >
          <Stack direction="row" spacing={10} >
            <IconButton size='small' sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;' }} onClick={handelImageDownload} >
              <DownloadRounded />
            </IconButton>
            <IconButton size='small' sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;' }}>
              <FavoriteBorderRounded />
            </IconButton>
            <IconButton size='small' sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;' }}>
              <ShareRounded />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Slider;