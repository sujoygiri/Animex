import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import ExpandLess from '@mui/icons-material';
import ExpandMore from '@mui/icons-material';

import './Home.css';
import Gallery from './Gallery';
import Slider from './Slider';

const sfwCategory = ['waifu', 'neko', 'shinobu', 'megumin', 'bully', 'cuddle', 'cry', 'hug', 'awoo', 'kiss', 'lick', 'pat', 'smug', 'bonk', 'yeet', 'blush', 'smile', 'wave', 'highfive', 'handhold', 'nom', 'bite', 'glomp', 'slap', 'kill', 'kick', 'happy', 'wink', 'poke', 'dance', 'cringe'];
const nsfwCategory = ['waifu', 'neko', 'trap', 'blowjob'];
const sfwCategoryAvtarSource = '/src/assets/sfw2.jpg';
const nsfwCategoryAvtarSource = '/src/assets/nsfw1.webp';

const Home = () => {

    let initialCategory = { type: 'sfw', category: 'waifu' };

    const [isSliderVisible, setIsSliderVisible] = useState(true);
    const [isGalleryVisible, setIsGalleryVisible] = useState(false);
    const [openSFW, setOpenSFW] = useState(false);
    const [openNSFW, setOpenNSFW] = useState(false);
    const [tabValue, setTabValue] = useState('slider');
    const [imageCategory, setImageCategory] = useState(initialCategory);

    /*
    -----------------------------
    --------------sfw------------
    waifu neko shinobu megumin bully cuddle cry hug awoo kiss lick pat smug bonk yeet blush smile wave highfive handhold nom bite  glomp slap kill kick happy wink poke dance cringe
    ------------------------------
    ---------------nsfw-----------
    waifu neko trap blowjob
    ------------------------------
    */

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
    const handelSfwCategory = (category) => {
        setImageCategory({ type: 'sfw', category: category });
    };
    const handelNsfwCategory = (category) => {
        setImageCategory({ type: 'nsfw', category: category });
    };

    return (
        <React.Fragment>
            <Container disableGutters={true} maxWidth="xl">
                <Grid container>
                    <Grid item xs={3} sm={3} md={3} lg={2} xl={2}>
                        <Box sx={{ height: '100vh', overflow: 'auto' }}>
                            <List disablePadding >
                                <ListItemButton onClick={handleClickSFW}>
                                    <ListItemAvatar>
                                        <Avatar src='/src/assets/sfw1.jpg' />
                                    </ListItemAvatar>
                                    <ListItemText primary="SFW" />
                                    {openSFW ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={openSFW} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {sfwCategory.map((category) => {
                                            return (<ListItemButton sx={{ pl: 4 }} key={category} onClick={() => handelSfwCategory(category)}>
                                                <ListItemAvatar>
                                                    <Avatar src={sfwCategoryAvtarSource} />
                                                </ListItemAvatar>
                                                <ListItemText primary={category} />
                                            </ListItemButton>);
                                        })}
                                    </List>
                                </Collapse>
                            </List>
                            <List disablePadding >
                                <ListItemButton onClick={handleClickNSFW}>
                                    <ListItemAvatar>
                                        <Avatar src='/src/assets/nsfw2.jpeg' />
                                    </ListItemAvatar>
                                    <ListItemText primary="NSFW" />
                                    {openNSFW ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={openNSFW} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {nsfwCategory.map((category) => {
                                            return (<ListItemButton sx={{ pl: 4 }} key={category} onClick={() => handelNsfwCategory(category)}>
                                                <ListItemAvatar>
                                                    <Avatar src={nsfwCategoryAvtarSource} />
                                                </ListItemAvatar>
                                                <ListItemText primary={category} />
                                            </ListItemButton>);
                                        })}
                                    </List>
                                </Collapse>
                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={9} sm={9} md={9} lg={10} xl={10}>
                        <Box sx={{ bgcolor: 'background.paper' }}>
                            <Tabs value={tabValue} onChange={handleTabChange} indicatorColor='secondary' variant='fullWidth'>
                                <Tab value="slider" label="Slider" />
                                <Tab value="gallery" label="Gallery" />
                            </Tabs>
                            {isSliderVisible && <Slider typeAndCategory={imageCategory} />}
                            {isGalleryVisible && <Gallery typeAndCategory={imageCategory} />}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Home;