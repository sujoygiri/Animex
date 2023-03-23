import React, { useState } from 'react';
import {
    Grid,
    Container,
    Box,
    List,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Collapse,
    Tabs,
    Tab
} from '@mui/material';
import {
    SendAndArchiveRounded,
    ExpandLess,
    ExpandMore,
    StarBorder
} from '@mui/icons-material';

import './Home.css';
import Gallery from './Gallery';
import Slider from './Slider';


const Home = () => {
    const [isSliderVisible, setIsSliderVisible] = useState(true);
    const [isGalleryVisible, setIsGalleryVisible] = useState(false);
    const [openSFW, setOpenSFW] = useState(false);
    const [openNSFW, setOpenNSFW] = useState(false);
    const [tabValue, setTabValue] = useState('slider');

    const handleTabChange = (event, newValue) => {
        if (newValue === 'slider') {
            setIsGalleryVisible(false);
            setIsSliderVisible(true);
        } else {
            setIsGalleryVisible(true);
            setIsSliderVisible(false);
        }
        setTabValue(newValue);
    };

    const handleClickSFW = () => {
        setOpenSFW(!openSFW);
    };
    const handleClickNSFW = () => {
        setOpenNSFW(!openNSFW);
    };


    return (
        <React.Fragment>
            <Container disableGutters={true} maxWidth="xl">
                <Grid container>
                    <Grid item xs={2} sm={3} md={3} lg={2} xl={2}>
                        <Box>
                            <List disablePadding >
                                <ListItemButton onClick={handleClickSFW}>
                                    <ListItemIcon>
                                        <SendAndArchiveRounded />
                                    </ListItemIcon>
                                    <ListItemText primary="SFW" />
                                    {openSFW ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={openSFW} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Starred" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </List>
                            <List disablePadding >
                                <ListItemButton onClick={handleClickNSFW}>
                                    <ListItemIcon>
                                        <SendAndArchiveRounded />
                                    </ListItemIcon>
                                    <ListItemText primary="NSFW" />
                                    {openNSFW ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={openNSFW} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Starred" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={10} sm={9} md={9} lg={10} xl={10}>
                        <Box sx={{ bgcolor: 'background.paper' }}>
                            <Tabs value={tabValue} onChange={handleTabChange} indicatorColor='secondary' variant='fullWidth'>
                                <Tab value="slider" label="Slider" />
                                <Tab value="gallery" label="Gallery" />
                            </Tabs>
                            {isGalleryVisible && <Gallery />}
                            {isSliderVisible && <Slider />}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Home;