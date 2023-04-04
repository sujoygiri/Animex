import React from 'react';
import { Box, CircularProgress } from '@mui/material';


const LoadingIcon = () => {
    return (
        <Box sx={{ display: 'flex', width: 'inherit', height: 'inherit', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress/>
        </Box>
    );
};

export default LoadingIcon;