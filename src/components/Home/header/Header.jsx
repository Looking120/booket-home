import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Box,
    Grid
} from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon, Info as InfoIcon, Business as BusinessIcon, Work as WorkIcon, Phone as PhoneIcon } from '@mui/icons-material';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [currentSection, setCurrentSection] = useState('home');

    // Function to handle scroll event
    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Determine which section is in view based on scroll position
        const homeSection = document.getElementById('home-section');
        const servicesSection = document.getElementById('services-section');
        const portfolioSection = document.getElementById('portfolio-section');

        if (homeSection && scrollPosition < homeSection.offsetTop + homeSection.offsetHeight) {
            setCurrentSection('home');
        } else if (servicesSection && scrollPosition < servicesSection.offsetTop + servicesSection.offsetHeight) {
            setCurrentSection('services');
        } else if (portfolioSection && scrollPosition < portfolioSection.offsetTop + portfolioSection.offsetHeight) {
            setCurrentSection('portfolio');
        } else {
            setCurrentSection('home'); // Fallback to 'home' if no other section detected
        }
    };

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        { text: 'Home', icon: <HomeIcon />, link: '#home-section' },
        { text: 'About Us', icon: <InfoIcon />, link: '#about-section' },
        { text: 'Services', icon: <BusinessIcon />, link: '#services-section' },
        { text: 'Portfolio', icon: <WorkIcon />, link: '#portfolio-section' },
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
            // Close drawer when switching to desktop view
            if (!isMobileView && drawerOpen) {
                setDrawerOpen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobileView, drawerOpen]);

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    height: '80px',
                    backgroundColor: currentSection === 'home' ? 'transparent' : '#f5f5f5',
                    backdropFilter: currentSection === 'home' ? 'blur(10px)' : 'none',
                    WebkitBackdropFilter: currentSection === 'home' ? 'blur(10px)' : 'none',
                    transition: 'background-color 0.3s ease-out',
                }}
            >
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '50px', color: currentSection === 'home' ? '#073fcd' : '#000', lineHeight: '80px', marginLeft: '20px' }}>
                        Wise<span style={{ color: '#fd0100' }}>Tech </span>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Grid container spacing={2} alignItems="center">
                            {menuItems.map((item, index) => (
                                <Grid item key={index}>
                                    <Typography variant="h6">
                                        <a href={item.link} style={{ textDecoration: 'none', 
                                          color: currentSection === 'home' ? '  #808080' : '#000' , 
                                          margin: '0 40px',  
                                          fontSize: '20px',
                                          fontWeight: 'bold',
                                          }}>{item.text}</a>
                                    </Typography>
                                </Grid>
                            ))}
                            <Grid item>
                                <a href="#contact-section" 
                                className="button" 
                                style={{ 
                                  backgroundColor: currentSection === 'home' ? '##808080' : '#000', 
                                  color: '#073fcd',
                                  padding: '8px 15px', borderRadius: '20px', 
                                  border: '1px solid #ddd', 
                                  fontWeight: 'bold', 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  textDecoration: 'none',
                                  margin: '0 40px',  
                                  fontSize: '20px',
                                  fontWeight: 'bold', }}>
                                    <PhoneIcon sx={{ 
                                      marginRight: 1, 
                                      color: currentSection === 'home' ? '#fd0100' : '#fff' }} /> 
                                      Contact Us
                                </a>
                            </Grid>
                        </Grid>
                    </Box>
                    <IconButton onClick={toggleDrawer} sx={{ display: { md: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen && isMobileView} // Only open drawer in mobile view
                onClose={toggleDrawer}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: '250px',
                        top: '80px',
                        backdropFilter: currentSection === 'home' ? 'blur(5px)' : 'none',
                        backgroundColor: currentSection === 'home' ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                    },
                }}
            >
                <div onClick={toggleDrawer}>
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem button key={index} component="a" href={item.link}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            {/* Placeholder to push content below the AppBar */}
            <Toolbar />
        </Box>
    );
};

export default Header;
