import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'
import ArrowCircleRightRounded from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRounded from '@mui/icons-material/ArrowCircleLeftRounded';
import DownloadRounded from '@mui/icons-material/DownloadRounded';
import FavoriteBorderRounded from '@mui/icons-material/FavoriteBorderRounded';
import ShareRounded from '@mui/icons-material/ShareRounded';


import LoadingIcon from './utils/LoadingIcon';


const Slider = ({ typeAndCategory }) => {

  const [imageUrl, setImageUrl] = useState('');
  const [disablePreviousButton, setDisablePreviousButton] = useState(true);
  const [showLoadingIcon, setShowLoadingIcon] = useState(true);
  // const [imageLoading, setImageLoading] = useState(true);
  const [openSnackBar, setOpenSnackBar] = useState(false)


  const getApiData = async () => {
    setShowLoadingIcon(true);
    let urlObj = await electron.urlApi.getUrl(typeAndCategory);
    // console.log(urlObj);
    setDisablePreviousButton(urlObj.disabledButtonStatus);
    setImageUrl(urlObj.url);
    setShowLoadingIcon(false);
  };

  useEffect(() => {
    getApiData();
  }, [typeAndCategory]);


  const handelPreviousImage = async () => {
    setShowLoadingIcon(true);
    let urlObj = await electron.urlApi.previousUrl();
    // console.log(urlObj);
    setDisablePreviousButton(urlObj.disabledButtonStatus);
    setImageUrl(urlObj.url);
    setShowLoadingIcon(false);
  };

  const handelNextImage = async () => {
    setShowLoadingIcon(true);
    let urlObj = await electron.urlApi.nextUrl(typeAndCategory);
    // console.log(urlObj);
    setDisablePreviousButton(urlObj.disabledButtonStatus);
    setImageUrl(urlObj.url);
    setShowLoadingIcon(false);
  };

  const handelImageDownload = async () => {
    await electron.handelImage.downloadImage(imageUrl);
    setOpenSnackBar(true)
  };

  // const handelImageLoading = () => {
  //   onLoad={handelImageLoading}
  //   console.log('loaded');
  //   if(imageLoading){
  //     setShowLoadingIcon(true)
  //   }else{
  //     setShowLoadingIcon(false)
  //   }
  // };

  const handelSnakBar = () => {
    setOpenSnackBar(false)
  }

  return (
    <React.Fragment>
      <Container disableGutters={true} >
        <Grid container sx={{ height: '82vh' }} >
          <Grid item xs={2} sm={2} md={2} lg={3} xl={3} style={{ width: 'inherit', height: 'inherit' }}>
            <Box sx={{ display: 'flex', width: 'inherit', height: 'inherit', justifyContent: 'center', alignItems: 'center' }}>
              <IconButton onClick={handelPreviousImage} disabled={disablePreviousButton || showLoadingIcon}>
                <ArrowCircleLeftRounded sx={{ cursor: 'pointer' }} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={6} xl={6} style={{ width: 'inherit', height: 'inherit' }}>
            <Box sx={{ width: 'inherit', height: 'inherit', mt: 0.5 }} >
              {showLoadingIcon ? <LoadingIcon /> : <img src={imageUrl} style={{ width: 'inherit', height: 'inherit' }} />}
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={3} xl={3} style={{ width: 'inherit', height: 'inherit' }}>
            <Box sx={{ display: 'flex', width: 'inherit', height: 'inherit', justifyContent: 'center', alignItems: 'center' }}>
              <IconButton onClick={handelNextImage} disabled={showLoadingIcon} >
                <ArrowCircleRightRounded sx={{ cursor: 'pointer' }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1.5%' }} >
          <Stack direction="row" spacing={10} >
            <IconButton size='small' sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;' }} onClick={handelImageDownload} disabled={showLoadingIcon} >
              { <DownloadRounded />}
            </IconButton>
            <IconButton size='small' sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;' }} disabled={showLoadingIcon} >
              <FavoriteBorderRounded />
            </IconButton>
            <IconButton size='small' sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;' }} disabled={showLoadingIcon} >
              <ShareRounded />
            </IconButton>
          </Stack>
        </Box>
        <Box>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={openSnackBar}
            autoHideDuration={1500}
            onClose={handelSnakBar}
            message="Download Successfull!"
            key={'vertical' + 'horizontal'}
          />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Slider;