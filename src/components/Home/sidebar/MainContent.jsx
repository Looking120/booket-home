import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import phone1 from './images/ima.png'; 
import './Sidebar.css'; 

const SuccessStories = () => {
    return (
        <Box className="success-stories-container">
            <Container sx={{ marginLeft: { md: 'auto' }, position: 'relative', zIndex: 1, maxWidth: { xs: '100%', md: '50%' }, ml: { xs: 0, md: '5%' } }}>
                <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                    WISE <span style={{color: '#fd0100',}}>TECH</span>
                </Typography>
                <br />
                <Typography variant="h7" style={{ fontWeight: 'bold', color:'#ededf4'}}>
                  Innovators passionate about programming web apps and mobile applications, 
                  we push technological boundaries to offer exceptional digital solutions.
                  At the forefront of new technologies, 
                  we design and develop tailor-made products that transform ideas into digital reality.
                </Typography>
                <Typography  variant="h7"  style={{ fontWeight: 'bold',color:'#ededf4'}}>
                  Whether you are an ambitious startup, an established business or a visionary entrepreneur, 
                  we are here to transform your concepts into fluid and engaging user experiences. 
                  With deep expertise in the latest frameworks and programming languages,
                  we are committed to providing robust and scalable solutions that meet your specific needs.
                </Typography>
                <Typography  variant="h7" style={{ fontWeight: 'bold',color:'#ededf4'}}>
                  Explore our diverse portfolio, discover our innovative projects 
                  and imagine the endless possibilities for your next application. 
                  At WISE TECH, we are ready to bring your digital vision to life.
                </Typography>
            </Container>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' }, 
                gap: '20px',
                maxWidth: { xs: '100%', md: '50%' },
                marginRight: { md: 'auto' }, 
            }}
        >
            <img src={phone1} alt="Phone 1" style={{ width: '350px', height: 'auto' }} />
        </Box>
        </Box>
    );
};

export default SuccessStories;
