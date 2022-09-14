import React from 'react';
import ThreeJSscene from './LandingPage/SceneContent';
import { Box } from '@mui/material';
import TopLogo from '../images/logo.png';

const LandingPage = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
            }}
        >
            <div className="landingTitle-container">
                <img
                    src={TopLogo}
                    alt="EventPortal"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        height: '10%',
                        paddingTop: '15%',
                    }}
                />
            </div>
            <div className="threeJS-container">
                <ThreeJSscene />
            </div>
        </Box>
    );
};

export default LandingPage;
